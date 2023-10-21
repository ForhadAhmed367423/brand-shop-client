



// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import Product from "../../Products/Product";

const Samsung = () => {
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

  const filteredSamsung = products.filter((product) => product.brand === "samsung");

  console.log(filteredSamsung);
  return (

    <div>
      <div className="grid grid-cols-4 px-[50px] py-[20px]">
      {filteredSamsung.map((product, index) => (
        <Product key={index} data={product}></Product>
      ))}
    </div>
    </div>
  );
};

export default Samsung;
