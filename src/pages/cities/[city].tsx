import React, { useEffect, useMemo, useRef, useState } from 'react';

import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import {
  FiArrowUp,
  FiArrowDown,
  FiArrowLeft,
  FiClock,
  FiCloudRain,
  FiThermometer,
} from 'react-icons/fi';

import { ibgeAPI, weatherAPI } from '../../services/api';

import {
  Container,
  DataContainer,
  InfoCardContainer,
  ImageContainer,
  ExternalForecastContainer,
  ForecastDayContainer,
  SmoothingBorder,
  TitleContainer,
} from '../../styles/pages/City';
import Loading from '../../components/Loading';
import weatherTranslate from '../../utils/weatherTranslate';

interface CityWeather {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    isDay: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_kph: number;
    uv: number;
    humidity: number;
    feelslike_c: number;
  };
  forecast: {
    forecastday: [
      {
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          daily_chance_of_rain: number;
        };
        hour: {
          time: string;
          temp_c: number;
          chance_of_rain: number;
          condition: {
            text: string;
            icon: string;
          };
        }[];
      },
    ];
  };
}

interface CityWeatherProps {
  city: CityWeather;
}

interface staticParams extends ParsedUrlQuery {
  city: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await ibgeAPI.get(
    'municipios/2304400|3550308|2611606|3304557|2927408|4106902|5300108|2700805|3106200|1302603',
    {
      params: { view: 'nivelado' },
    },
  );

  const paths = data.map(
    (city: { ['municipio-nome']: string; ['UF-sigla']: string }) => {
      return {
        params: {
          city: `${city['municipio-nome']}-${city['UF-sigla']}`,
        },
      };
    },
  );

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<
  CityWeatherProps,
  staticParams
> = async context => {
  const { params } = context;

  const { data } = await weatherAPI.get('/forecast.json', {
    params: { q: params?.city },
  });

  return {
    props: {
      city: data,
      revalidate: 15 * 60,
    },
  };
};

export default function City({ city }: CityWeatherProps) {
  const [currentHour] = useState(new Date().getHours());
  const forecastContainerRef = useRef<HTMLDivElement>(null);
  const { query, isFallback } = useRouter();

  const formatedWeatherData = useMemo(() => {
    if (city) {
      const condition = weatherTranslate(city.current);

      return {
        condition,
      };
    }
    return {};
  }, [city]);

  useEffect(() => {
    if (forecastContainerRef.current) {
      const div = forecastContainerRef.current;
      const hourContainerWidth = div.children[0].getBoundingClientRect().width;

      const scrollPosition =
        hourContainerWidth * currentHour -
        (hourContainerWidth * 137.5) / 100 / 2;
      div.scrollTo({ left: scrollPosition });
    }
  }, [isFallback, currentHour]);

  if (isFallback) {
    return <Loading />;
  }

  return (
    <Container>
      <div>
        <TitleContainer>
          <a href="/">
            <FiArrowLeft />
          </a>
          <h1>{`${query.city}`.replace('-', ', ')}</h1>
        </TitleContainer>

        <ImageContainer>
          <img
            src={city.current.condition.icon}
            alt={city.current.condition.text}
          />
        </ImageContainer>

        <InfoCardContainer>
          <p>{formatedWeatherData?.condition}</p>
          <div>
            <h1>
              {city.current.temp_c}
              ºC
            </h1>
            <DataContainer>
              <span>Sensação</span>
              {/* eslint-disable-next-line prettier/prettier */}
              <p>
                {city.current.feelslike_c}
                º
              </p>
            </DataContainer>
          </div>

          <div>
            <DataContainer>
              <FiArrowDown />
              <p>16º</p>
            </DataContainer>
            <DataContainer>
              <FiArrowUp />
              <p>25º</p>
            </DataContainer>
          </div>
          <DataContainer>
            <span>Vento</span>
            <p>
              {city.current.wind_kph}
              km/h
            </p>
          </DataContainer>
          <DataContainer>
            <span>Humidade</span>
            {/* eslint-disable-next-line prettier/prettier */}
            <p>
              {city.current.humidity}
              %
            </p>
          </DataContainer>
          <DataContainer>
            <span>Chuva</span>
            {/* eslint-disable-next-line prettier/prettier */}
            <p>
              {city.forecast.forecastday[0].day.daily_chance_of_rain}
              %
            </p>
          </DataContainer>
        </InfoCardContainer>

        <div>
          <ExternalForecastContainer
            currentHour={currentHour + 1}
            ref={forecastContainerRef}
          >
            {city.forecast.forecastday[0].hour.map(hour => (
              <div key={hour.time}>
                <img src={hour.condition.icon} alt={hour.condition.text} />
                <div>
                  <DataContainer>
                    <FiThermometer />
                    <p>{`${hour.temp_c}º`}</p>
                  </DataContainer>
                  <DataContainer>
                    <FiCloudRain />
                    <p>{`${hour.chance_of_rain}%`}</p>
                  </DataContainer>
                </div>
                <DataContainer>
                  <FiClock />
                  <p>{hour.time.split(' ')[1]}</p>
                </DataContainer>
              </div>
            ))}
            <ForecastDayContainer />
          </ExternalForecastContainer>
          <SmoothingBorder>
            <div />
            <div />
          </SmoothingBorder>
        </div>
      </div>
    </Container>
  );
}
