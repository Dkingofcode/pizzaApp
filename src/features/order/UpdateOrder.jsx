import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
import PropTypes from "prop-types";


function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

//console.log(order);

UpdateOrder.propTypes = {
    order: PropTypes.object.isRequired, // Define the shape of 'order' as per your data structure
};

export default UpdateOrder;

export async function action({  params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
