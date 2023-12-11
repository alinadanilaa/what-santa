import React from 'react';
import './App.css';
import Gallery from './Gallery';

const santas = [

  {
    id: 2,
    title: 'Santa 2',
    image: './2.png',
  },
  {
    id: 3,
    title: 'Santa 3',
    image: './3.png',
  },
  {
    id: 4,
    title: 'Santa 4',
    image: './4.png',
  },
  {
    id: 5,
    title: 'Santa 5',
    image: './5.png',
  },
  {
    id: 6,
    title: 'Santa 6',
    image: './6.png',
  },
  {
    id: 4,
    title: 'Santa 4',
    image: './4.png',
  },
  {
    id: 5,
    title: 'Santa 5',
    image: './5.png',
  },
  {
    id: 6,
    title: 'Santa 6',
    image: './6.png',
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
