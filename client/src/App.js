import React from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import Footer from './components/footer/Footer';
import Search from './components/search/Search';
import Body from './components/body/Body';
import './styles/main.sass'

const GET_WEATHERDATA = gql`
  query Query($inpValue: String) {
    weather(inpValue: $inpValue) {
      location {
        city
        country
        localtime
      }
      values {
        temp
        pressure
        humidity
        precip
        windDir
        windSpeed
        windGust
        cloud
        vis
      }
    }
  }
`

function App() {
  const [getWeather, { called, ...response }] = useLazyQuery(GET_WEATHERDATA);

  return (
    <div className='app'>
      <Search getWeather={getWeather} />
      {called && <Body response={response} />}
      <Footer />
    </div>
  );
}

export default App;