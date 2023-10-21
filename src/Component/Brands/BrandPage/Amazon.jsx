
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import Product from "../../Products/Product";

const Amazon = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch All Products
    fetch("https://brand-shop-server-nkk757sco-forhadahmed367423s-projects.vercel.app/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const filteredAmazon = products.filter((product) => product.brand === "amazon");

  console.log(filteredAmazon);
  return (
    <div className="grid grid-cols-4 px-[160px] py-[80px]">
      {filteredAmazon.map((product, index) => (
        <Product key={index} data={product}></Product>
      ))}
    </div>
  );
};

export default Amazon;
