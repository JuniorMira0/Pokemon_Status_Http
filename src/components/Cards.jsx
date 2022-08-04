import React from 'react';
import { status } from '../helper/httpStatus';
import './Cards.css';
import { getPokemon } from '../service/fetchAPI';


const Cards = () => {
  return (
    <div>
      {
        <div className='card'>
          {status.map((code) => (
            <div className='cards'>
              <h1>{code.title}</h1>
              <p>{code.content}</p>
            </div>
          ))}
        </div>
      }
    </div>
  )
};

export default Cards;