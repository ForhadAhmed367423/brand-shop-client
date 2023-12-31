import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import AddProducts from './Component/AddProduct/AddProducts';
import Login from './Component/Firebase/Login/Login';
import Register from './Component/Firebase/Register/Register';

import Amazon from './Component/Brands/BrandPage/Amazon';
import Apple from './Component/Brands/BrandPage/Apple';
import Logitecg from './Component/Brands/BrandPage/Logitecg';
import Dell from './Component/Brands/BrandPage/Dell';
import Microsoft from './Component/Brands/BrandPage/Microsoft';
import Samsung from './Component/Brands/BrandPage/Samsung';
import MyCart from './Component/MyCart/MyCart';
import Error from './Component/Error';
import SIngleProductDetails from './Component/Products/SIngleProductDetails';
import UpdateForm from './Component/UpdateForm/UpdateForm';
import { UserContextProvider } from './Context/UserContext';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/addProduct",
        element:<AddProducts></AddProducts>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/samsung",
        element:<Samsung></Samsung>
      },
      {
        path:"/microsoft",
        element:<Microsoft></Microsoft>
      },
      {
        path:"/dell",
        element:<Dell></Dell>
      },
      {
        path:"/logitech",
        element:<Logitecg></Logitecg>
      },
      {
        path:"/apple",
        element:<Apple></Apple>
      },
      {
        path:"/amazon",
        element:<Amazon></Amazon>
      }
      ,{
        path:"/myCart",
        element: <MyCart></MyCart>
      },
      {
        path: "/singleProductDetails/:id",
        element: <SIngleProductDetails />,
      },
      {
        path: "/updateForm/:id",
        element: <UpdateForm />,
      },

    ]
      
    
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(

    

      <UserContextProvider>
        <React.StrictMode>

      <RouterProvider router={router} />
        </React.StrictMode>
      </UserContextProvider>

  
)
