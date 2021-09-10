import React, { useState, useContext } from 'react';
import Navigation from './Nav.jsx';
import style from './app.css.js';

const App = () => {
  const { start, setStart } = useState(null);
  return (
    <div style={style.page}>
      <Navigation />
      <img style={style.profile} src="./linkedin.jpg" />
    </div>
  );
};

export default App;
