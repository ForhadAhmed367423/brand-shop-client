/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import Products from "./Products";

/* eslint-disable react/prop-types */
const Product = ({ data }) => {
  if (!data) {
    return null;
  }

  const { name, brand, image,price,description,type } = data || " ";

  return (
    
    <div>
      
      <div className="card card-compact w-6/5 mr-3 h-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-60 h-60 px-2 py-3" src={image} alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex justify-evenly">
          <p className="text-lg font-semibold">{brand}</p>
          <p className="text-lg font-semibold">{type}</p>
          </div>
          <p className="text-xl font-bold mb-2">price : {price}$</p>
          <p className="text-lg font-semibold">{description}</p>

          <div className="flex gap-3">
            <Link to={`/updateBrand/${brand}`}>
            <button className="px-7 py-3 bg-[#000000] text-white font-semibold text-[18px]'">Edit</button>
            </Link>
            <button className="px-7 py-3 bg-[#000000] text-white font-semibold text-[18px]'">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
