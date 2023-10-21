import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SIngleProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  console.log(id);

  useEffect(() => {
    // Fetch All Products
    fetch(`https://brand-shop-server-sable-gamma.vercel.app/product/singleProduct/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [id]);

  console.log(product.product);

  const { name, image, brand, price } = product.product || {};

  console.log(name, image, brand, price);

  return (
    <div className="py-[100px]">
      <div className=" bg-[#ECEDE8] shadow-xl w-[650px] gap-[40px] flex m-auto items-center">
        <div>
          <img className="w-[100%] h-[284px]" src={image} alt="img" />
        </div>
        <div className="">
          <h2 className="text-[24px] font-semibold mb-[16px] text-[#1B3C35]">
            {" "}
            {brand}
          </h2>
          <p className="text-[#AEC3BE] text-[18px] mb-[16px]">{name}</p>
          <p className="text-[18px] text-[#1B3C35] mb-[16px]">
            price : {price} $
          </p>
          

          <div className="flex gap-3">
            <button className="bg-[#5F8172] text-[#fff] py-4 px-5 text-[16px] font-medium">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIngleProductDetails;
