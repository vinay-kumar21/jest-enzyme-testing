import React from 'react';
import './App.scss';

import HeadLine from './components/Headline';
import Header from './components/Header';

const tempArr=[{
  fName:'vinay',
  lName:'kumar',
  email:'vinaykumar@gmail.com',
  age:29,
  onlineStatus:true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <HeadLine header='Posts' desc="this is the description" tempArr={tempArr}/>
      </section>
    
    </div>
  );
}

export default App;
