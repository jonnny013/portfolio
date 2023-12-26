import React from 'react';
import {imgData} from './data';
import './App.css';
import Carousel from './components/carousel';


const App: React.FC = () => {

  const images: string[] = [];
  if (imgData) {
    imgData.map(a => images.push(a));
  }
  

  return (
    <div>
      <h1>My photos</h1>
    <Carousel images={images} />
    </div>
  );
};

export default App;
