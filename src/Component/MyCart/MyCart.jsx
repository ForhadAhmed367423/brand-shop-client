// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CartItems from "./CartItems";

const MyCart = () => {
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    // Fetch All Products
    fetch(`https://brand-shop-24c38.web.app/getCarts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCartItems(data);
          Swal.fire({
            title: "Success!",
            text: "Product added successfully.",
            icon: "success",
            confirmButtonText: "cool",
          });
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  console.log(cartItems);

  return (
    
      <div className="px-[160px] py-[100px] flex justify-center">
        <CartItems cartData={cartItems} />
      </div>

  );
};

export default MyCart;
