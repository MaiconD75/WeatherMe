import React, { useEffect, useMemo, useState } from 'react';
import { weatherAPI } from '../services/api';
import { Container } from '../styles/components/CapitalsWether';

interface CityWeather {
  location: {
    name: string;
  };
  forecast: {
    forecastday: [
      {
        day: {
          maxtemp_c: number;
          mintemp_c: number;
        };
      },
    ];
  };
}

interface CapitalWeatherProps {
  capital: string;
}

const CapitalWeather: React.FC<CapitalWeatherProps> = ({ capital }) => {
  const [capitalWeather, setCapitalWeather] = useState<CityWeather>(
    {} as CityWeather,
  );

  useEffect(() => {
    const apiReq = async () => {
      const { data } = await weatherAPI.get('/forecast.json', {
        params: { q: capital },
      });

      setCapitalWeather(data);
    };

    apiReq();
  }, [capital]);

  const memoizedTemp = useMemo(() => {
    if (!capitalWeather.forecast) {
      return { maxTemp: 0, minTemp: 0 };
    }
    const maxTemp = Math.round(
      capitalWeather.forecast.forecastday[0].day.maxtemp_c,
    );

    const minTemp = Math.round(
      capitalWeather.forecast.forecastday[0].day.mintemp_c,
    );
    return { maxTemp, minTemp };
  }, [capitalWeather]);

  if (!capitalWeather.location) {
    return <Container />;
  }

  return (
    <Container>
      <span>{`${memoizedTemp.maxTemp}º`}</span>
      <span>{`${memoizedTemp.minTemp}º`}</span>
      <p>{capital}</p>
    </Container>
  );
};

export default CapitalWeather;
