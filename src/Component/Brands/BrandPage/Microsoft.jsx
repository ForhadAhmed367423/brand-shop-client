



// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import Product from "../../Products/Product";

const Microsoft = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch All Products
    fetch("http://localhost:5000/product", {
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

  const filteredMicrosoft = products.filter((product) => product.brand === "microsoft");

  console.log(filteredMicrosoft);
  return (
    <div className="grid grid-cols-4 px-[160px] py-[80px]">
      {filteredMicrosoft.map((product, index) => (
        <Product key={index} data={product}></Product>
      ))}
    </div>
  );
};

export default Microsoft;
