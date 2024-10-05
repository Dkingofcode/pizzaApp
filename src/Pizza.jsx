import React from 'react';
import { pizzaData } from './data';


const Pizza = ({name, photoName, ingredients, soldOut, price }) => {

// if(soldOut) return null;

    return (
    <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
    <img src={photoName} alt={name} />
    <div>
    <h2>{name}</h2>
    <p>{ingredients}</p>


    <span>{soldOut ? "Sold out" : price}</span>
    </div>
    
  </li>
  )
}

export default Pizza;
