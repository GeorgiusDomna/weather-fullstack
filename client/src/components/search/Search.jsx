import React from "react";
import planet from '../../img/planet.svg'
import s from './Search.module.sass'

const Search = ({ getWeather }) => {

function handlineSubmit(event) {
  const inp = event.target.input;

  event.preventDefault();
  if (inp.value) {
    getWeather({
      fetchPolicy: 'network-only',
      variables: { inpValue: inp.value },
      pollInterval: 120000,
    });
    inp.value = "";
  }
}

  return (
    <form onSubmit={handlineSubmit} className={s.form}>
      <input placeholder="Введите город" name="input" className={s.input} />
      <button className={s.btn}>
        <img src={planet} alt="searchImg" className={s.img} />
      </button>
    </form>
  );
}

export default Search;