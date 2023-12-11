import React from 'react';
import './App.css';
import Gallery from './Gallery';

const cities = [
  {
    id: 1,
    title: 'Santa 1',
    image: './santa1.png',
  },
  {
    id: 2,
    title: 'Santa 2',
    image: './santa2.png',
  },
  {
    id: 3,
    title: 'Santa 3',
    image: './santa1.png',
  },
  {
    id: 4,
    title: 'Santa 4',
    image: './santa2.png',
  },
  {
    id: 5,
    title: 'Santa 5',
    image: './santa1.png',
  },
];

const App = () => {
  return (
    <div className="app">
      <Gallery cities={cities} />
    </div>
  );
};

export default App;
