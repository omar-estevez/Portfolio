import './App.scss';
import React, { useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Intro from './components/Intro';
import Main from './layout/Main';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000); // 3 seconds delay
  }, []);

  return (
    <SwitchTransition mode='out-in'>
      {isLoading ? (
        <CSSTransition
          key="1"
          timeout={1000}
          classNames="fade"
        >
          <Intro />
        </CSSTransition>
      ) : (
        <CSSTransition
          key="2"
          timeout={1000}
          classNames="fade"
        >
          <Main />
        </CSSTransition>
      )}
    </SwitchTransition>
  );
}

export default App;
