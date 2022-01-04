import React, { ChangeEvent, useCallback, useState } from 'react';
import Head from 'next/head';

import { GetStaticProps } from 'next';
import {
  Container,
  ListInfo,
  CitiesList,
  InputContainer,
} from '../styles/pages';
import CapitalWeather from '../components/CapitalWeather';
import { ibgeAPI } from '../services/api';

interface DataCityProps {
  id: string;
  nome: string;
  microrregiao: {
    mesorregiao: {
      UF: {
        nome: string;
        sigla: string;
      };
    };
  };
}

interface CitiesListProps {
  cities: {
    id: string;
    name: string;
    state: {
      name: string;
      initials: string;
    };
  }[];
}

export const getStaticProps: GetStaticProps<CitiesListProps> = async () => {
  const { data } = await ibgeAPI.get('municipios');

  const allCities = data as DataCityProps[];

  const newData = allCities.map(city => ({
    id: city.id,
    name: city.nome,
    state: {
      name: city.microrregiao.mesorregiao.UF.nome,
      initials: city.microrregiao.mesorregiao.UF.sigla,
    },
  }));

  return {
    props: {
      cities: newData,
    },

    revalidate: 10,
  };
};

const Home: React.FC<CitiesListProps> = ({ cities }) => {
  const [citySearch, setCitySearch] = useState('');
  const [citiesList, setCitiesList] = useState(cities);

  const handleChangeCitySearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCitySearch(e.target.value);
      setCitiesList(
        cities
          .filter(
            city =>
              city.name
                .toLocaleLowerCase()
                .indexOf(e.target.value.toLocaleLowerCase()) > -1,
          )
          .slice(0, 30),
      );
    },
    [cities],
  );

  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <Container>
        <h1>WeatherMe</h1>

        <InputContainer citySearch={citySearch}>
          <input onChange={e => handleChangeCitySearch(e)} />
          {citySearch && (
            <>
              <div />
              <CitiesList>
                {citiesList.map(city => (
                  <li key={city.id}>
                    <a href={`/cities/${city.name}-${city.state.initials}`}>
                      <p>{city.name}</p>
                      <span>{city.state.initials}</span>
                    </a>
                  </li>
                ))}
              </CitiesList>
            </>
          )}
        </InputContainer>

        <ul>
          <ListInfo>
            <span>Máx</span>
            <span>Min</span>
          </ListInfo>
          <ListInfo>
            <span>Máx</span>
            <span>Min</span>
          </ListInfo>
          <CapitalWeather capital="Rio de Janeiro" />
          <CapitalWeather capital="São Paulo" />
          <CapitalWeather capital="Belo Horizonte" />
          <CapitalWeather capital="Brasília" />
          <CapitalWeather capital="Belém" />
          <CapitalWeather capital="Salvador" />
          <CapitalWeather capital="Curitiba" />
          <CapitalWeather capital="Fortaleza" />
          <CapitalWeather capital="Manaus" />
          <CapitalWeather capital="Recife" />
        </ul>
      </Container>
    </div>
  );
};

export default Home;
