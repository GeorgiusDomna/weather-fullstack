import React from "react";
import WeatherBlock from "../weatherBlock/WeatherBlock";
import s from './weatherBody.module.sass';

const Body = ({ response }) => {

  const { loading, error, data } = response;
  
  if (loading) return <div className={s.weather}>Loading...</div>;
  if (error) return <div className={s.weather}>{error.message}</div>;

  const local = data.weather.location;
  const values = data.weather.values;

  return (
    <div className={s.weather}>

      <div className={s.location}>
        <div className={s.cityName}>{local.city}</div>
        <div className={s.countryName}>{local.country}</div>
      </div>
      <div className={s.localtime}>{local.localtime}</div>


      <div className={s.body}>
        <div className={s.row}>
          <WeatherBlock title={'Температура (С)'} data={values.temp} />
          <WeatherBlock title={'Давление (мб)'} data={values.pressure} />
        </div>

        <div className={s.row}>
          <WeatherBlock title={'Влажность (%)'} data={values.humidity} />
          <WeatherBlock title={'Количество осадков (мм)'} data={values.precip} />
        </div>

        <div className={s.row}>
          <WeatherBlock title={'Направление ветра'} data={values.windDir} />
          <WeatherBlock title={'Скорость ветра (км/ч)'} data={values.windSpeed} />
          <WeatherBlock title={'Порывы ветра (км/ч)'} data={values.windGust} />
        </div>

        <div className={s.row}>
          <WeatherBlock title={'Облачность (%)'} data={values.cloud} />
          <WeatherBlock title={'Видимость (км)'} data={values.vis} />
        </div>
      </div>

    </div>
  );
}

export default Body;