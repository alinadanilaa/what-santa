import React from 'react';
import './App.css';
import Gallery from './Gallery';

const santas = [];

for (let i = 1; i <= 40; i++) {
  santas.push({
    id: i,
    title: `Santa ${i}`,
    image: `./public/${i}.png`,
  });
}

const App = () => {
  return (
    <div className="app">
      <Gallery santas={santas} />
    </div>
  );
};

export default App;
