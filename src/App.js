import React from 'react';
import './App.css';
import Row from './Row';
import requests from './Request';
import Banner from "./Banner";
import Nav from './Nav';
import Mycomponent from './Mycomponent';


function App() {
  return (
    <div className="App">

      <Nav   />
      <Banner />


      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOrignals} isLargeRow />
      
      {/* <Mycomponent /> */}

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />


      
    </div>
  );
}

export default App;
