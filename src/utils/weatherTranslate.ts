import weatherConditionCodes from './weatherCoditionsCodes';

export interface coditionData {
  isDay: number;
  condition: {
    text: string;
    code: number;
  };
}

const weatherTranslate = (weather: coditionData): string => {
  const translatedCondition = weatherConditionCodes.find(
    weatherConditionCode =>
      weatherConditionCode.code === weather.condition.code,
  );

  if (translatedCondition) {
    const currentCondition =
      weather.isDay === 1
        ? translatedCondition.portuguese.day_text
        : translatedCondition.portuguese.night_text;

    return currentCondition;
  }

  return weather.condition.text;
};

export default weatherTranslate;
