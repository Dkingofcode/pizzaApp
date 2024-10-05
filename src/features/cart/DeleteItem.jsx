import PropTypes from "prop-types";
//import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';


function DeleteItem({ pizzaId }) {
   const dispatch = useDispatch();

    return (
    <div>
      <Button 
      onClick={() => {
        dispatch(deleteItem(pizzaId));
        console.log(pizzaId);
        }} type="small">
        Delete
      </Button>
    </div>
  )
}

// Inside the DeleteItem component file
DeleteItem.propTypes = {
  pizzaId: PropTypes.number.isRequired, // Or string, depending on how pizzaId is defined
};


export default DeleteItem;
