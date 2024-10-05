import { formatCurrency } from "../../utils/helpers";

import PropTypes from "prop-types";

function OrderItem({ item, isLoadingIngredients, ingredients }){
     console.log(item);
    const { quantity, name, totalPrice } = item;

     return (
        <li className="space-y-1 py-3">
           <div className="flex items-center justify-between gap-4 text-sm">
             <p className="font-bold">
               <span>{quantity}&times;</span> {name} 
             </p>
             <p className="font-bold">{formatCurrency(totalPrice)}</p>
            </div> 
            <p className="text-sm capitalize italic text-stone-400">
              {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
            </p>
        </li>
    );
}


// Define propTypes to fix the missing prop validation error
OrderItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  isLoadingIngredients: PropTypes.bool,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default OrderItem;