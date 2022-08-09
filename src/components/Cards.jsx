import React from 'react';
import { useAuth } from '../context/auth';
import './Cards.css';


const Cards = () => {
  const { data, search, setSearch } = useAuth();
  

  const filterData = search.length > 0 
  ? data.filter((list) => list.title.includes(search)) : [];


  return (
    <>
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
          { search.length > 0 ? <div  className='cards'> {
            filterData.map((code) => (
            <ul>
                  <li>
                    <a className="card">
                      <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
                      <div className="card__overlay">
                        <div className="card__header">
                          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                          <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                          <div className="card__header-text">
                            <h3 className="card__title">{code.title}</h3>
                          </div>
                        </div>
                        <p className="card__description">{code.content}</p>
                      </div>
                    </a>
                  </li>
                </ul>
            ))}
            </div> 
            :
          <div  className='cards'> {
            data.map((code) => (
            <ul>
                  <li>
                    <a className="card">
                      <img src={`https://cdn.traction.one/pokedex/pokemon/${code.id}.png`} className="card__image" alt="" />
                      <div className="card__overlay">
                        <div className="card__header">
                          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                          <img className="card__thumb" src={`https://cdn.traction.one/pokedex/pokemon/${code.id}.png`} alt="" />
                          <div className="card__header-text">
                            <h3 className="card__title">{code.title}</h3>
                          </div>
                        </div>
                        <p className="card__description">{code.content}</p>
                      </div>
                    </a>
                  </li>
                </ul>
            ))}
            </div> }
    </>
  )
};

export default Cards;