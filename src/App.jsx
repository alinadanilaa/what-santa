import React from 'react';
import './App.css';
import Gallery from './Gallery';

const santas = [
  {
    id: 1,
    title: 'Santa 1',
    image: './public/1.png',
  },
  {
    id: 2,
    title: 'Santa 2',
    image: './public/2.png',
  },
  {
    id: 3,
    title: 'Santa 3',
    image: './public/3.png',
  },
  {
    id: 4,
    title: 'Santa 4',
    image: './public/4.png',
  },
  {
    id: 5,
    title: 'Santa 5',
    image: './public/5.png',
  },
  {
    id: 6,
    title: 'Santa 6',
    image: './public/6.png',
  },
];

const App = () => {
  return (
    <div className="app">
      <Gallery santas={santas} />
    </div>
  );
};

export default App;
