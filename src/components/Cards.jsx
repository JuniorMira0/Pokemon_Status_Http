import React from 'react';
import { useAuth } from '../context/auth';
import './Cards.css';


const Cards = () => {
  const { data, search, setSearch } = useAuth();
  

  const filterData = search.length > 0 
  ? data.filter((list) => list.title.includes(search)) : [];


  return (
    <div>
      <div className='input-search'>
        <label htmlFor='input-filter'>
          <input
          type='text'
          id='input-filter'
          placeholder='Search status...'
          onChange={ ({target}) => setSearch(target.value)}
          value={ search.title}>
          </input>
        </label>
      </div>
      {
        <div className='card'>
          { search.length > 0 ? (
            filterData.map((code) => (
              <div className='cards'>
                <h1>{code.title}</h1>
                <p>{code.content}</p>
              </div>
            ))
          ) : (
            data.map((code) => (
              <div className='cards'>
                <h1>{code.title}</h1>
                <p>{code.content}</p>
              </div>
            ))
          ) }
        </div>
      }
    </div>
  )
};

export default Cards;