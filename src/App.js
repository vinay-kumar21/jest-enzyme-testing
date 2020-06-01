import React from 'react';
import './App.scss';

import HeadLine from './components/Headline';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <HeadLine header="Posts" desc="this is the description"/>
      </section>
    
    </div>
  );
}

export default App;
