import React from 'react';

const Order = ({closeHour, openHour }) => {
  return (
      <div className='order'>
            <p>We are Open until {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
        <button className='btn'>Order</button>
       </div>
    
  )
}

export default Order;
