import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './App.css';
import Menu, { loader as menuLoader, } from "./features/menu/Menu";
import Home from "./ui/Home";
import Order, { loader as orderLoader} from './features/order/Order';
import CreateOrder, { action as createOrderAction } from "./features/order/CreateOrder";
import Cart from './features/cart/Cart';
import AppLayout from './ui/AppLayout';
import Error from "./ui/Error";
//import CreateOrder from "./features/order/CreateOrder"; { action as createOrderaction } from './features/order/CreateOrder';
import { action as updateOrderAction } from './features/order/UpdateOrder';

const router = createBrowserRouter([ 
  { 
  element: <AppLayout />,
  errorElement: <Error  />,
  children: [ 
  {
    path: "/",
    element: <Home  />,
  },
  {
    path: "/menu",
    element: <Menu />,
    loader: menuLoader,
    errorElement: <Error  />
  },
  {
     path: "/cart",
     element: <Cart  />
  },
  {
     path: "/order/new",
     element: <CreateOrder  />,
     action: createOrderAction
  },
  {
     path: "/order/:orderId",
     element: <Order />,
     loader: orderLoader,
     errorElement: <Error />,
     action: updateOrderAction,
  }
  ]}
])


function App() {
 // const [count, setCount] = useState(0);

  return (
    <RouterProvider router={router} />
    // <>
    //   <div className='container'>
    //     <Header />
    //     <Menu />
    //     <Footer />

    //    </div>
    // </>
  );
};

export default App;
