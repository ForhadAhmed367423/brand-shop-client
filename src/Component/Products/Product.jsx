/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Product = ({ data }) => {
  if (!data) {
    return null;
  }

  const { _id, name, brand, image, price, type } = data || " ";

  return (
    <div>
      <div className=" bg-[#ECEDE8] shadow-xl w-[300px]">
        <div>
          <img className="w-[100%]" src={image} alt="img" />
        </div>
        <div className="p-[30px]">
          <h2 className="text-[24px] font-semibold mb-[16px] text-[#1B3C35] uppercase">
            {brand}
          </h2>
          <p className="text-[#AEC3BE] text-[18px] mb-[16px]">{name}</p>
          <p className="text-[18px] text-[#1B3C35] mb-[20px]">
            price : {price}$
          </p>
          <p className="text-[18px] text-[#1B3C35] mb-[20px]">{type}</p>
          <div className="flex gap-3">
            <Link to={`/singleProductDetails/${_id}`}>
              <button className="bg-[#5F8172] text-[#fff] py-2 px-4 text-[16px] font-medium">
                Details
              </button>
            </Link>

            <Link to={`/updateForm/${_id}`}>
              <button className="bg-[#5F8172] text-[#fff] py-2 px-4 text-[16px] font-medium">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
