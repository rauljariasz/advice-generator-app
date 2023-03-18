import React, { useEffect, useState } from 'react';

/* Styles */
import "./styles/styles.scss";

/* Imgs */
import patternMobile from './assets/pattern-divider-mobile.svg';
import patternDesktop from './assets/pattern-divider-desktop.svg';
import random from './assets/icon-dice.svg';

const App = () => {
  const API = 'https://api.adviceslip.com/advice'
  const [number, setNumber] = useState()
  const [advice, setAdvice] = useState()

  function callApi(api) {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setNumber(data.slip.id)
        setAdvice(data.slip.advice);
      })
  } 

  function handdleClick() {
    return callApi(API);
  }

  useEffect(() => {
    callApi(API)
  }, [])

  return (
    <>
      <main className='main'>
        <div className='cardContainer'>
          {number && <h1 className='cardContainer__h1'>ADVICE #{number}</h1>}
          {advice && <p className='cardContainer__p'>{advice}</p>}
          <img className='patternMobile' src={patternMobile} alt='Divider' />
          <img className='patternDesktop' src={patternDesktop} alt='Divider' />
          <button className='cardContainer__button' onClick={handdleClick}>
            <img src={random} alt='Random Advice'/>
          </button>
        </div>
      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/rauljariasz">Raul Arias</a>.
      </footer>
    </>
  );
};

export default App;