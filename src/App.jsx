import React, { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered');


  const [chosenCount, setChosenCount] = useState(0);

  const handleCounter = (counter) => {
    setChosenCount(counter)
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleCounter} />
        <Counter initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
