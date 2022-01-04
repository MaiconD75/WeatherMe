import axios from 'axios';

export const weatherAPI = axios.create({
  baseURL: 'https://api.weatherapi.com/v1/',
  params: {
    key: '1931bcddf1934aefa54161155210812',
    days: 1,
    aqi: 'no',
    alerts: 'no',
  },
});

export const ibgeAPI = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades',
  params: {
    orderBy: 'nome',
  },
});
