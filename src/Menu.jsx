import React from 'react';
import Pizza from './Pizza';
import { pizzaData } from './data';


const Menu = () => {

  const pizzas = pizzaData;
  const numPizza = pizzas.length;  
///  console.log("Menu");

  return (      
      <main className='menu'>
          <h2>Our menu</h2>

         {numPizza > 0 ? (
            <>
            <p>Authentic Italian cuisine. 6 creative dishes to choose from. All
                from our stone oven, all organic, all delicious.
            </p>

           <ul className='pizzas'>
           {pizzaData.map((pizza) => (  
               <Pizza name={pizza.name} photoName={pizza.photoName} key={pizza.name} ingredients={pizza.ingredients} price={pizza.price} />
           ))}
         </ul>
          </>
         ):(
            <p>We are currently working on our menu. Please come back later.</p>
         )}

           
      </main>      
    
  )
}

export default Menu;
