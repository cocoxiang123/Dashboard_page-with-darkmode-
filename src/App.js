import React, { useState } from 'react';
import './App.css';
import Dashboards from './components/Dashboards'
import Overviews from './components/Overviews'
import Header from './components/Header'
import styled from 'styled-components'

function App() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  }
  const DarkBackground = styled.div`
        background:grey;
  `;


  return (

    <div className={`App ${!checked ? "" : "blackBg"}`}>
      <div className="App-container">
        <Header handleChange={handleChange} checked={checked} />
        <Dashboards checked={checked} />
        <Overviews checked={checked} />
      </div>
    </div>

  );
}

export default App;
