// eslint-disable-next-line no-unused-vars
import React from "react";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateForm = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    // Fetch Single Products
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

  const { name, image, brand, price, type, description } =
    product.product || {};

  // Handle Update
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // Project Update Handler
  // Project Update Handler
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    let updatedData = { ...inputs };
    console.log(updatedData);

    fetch(`http://localhost:5000/updateProduct/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // You can show a success message here if needed
        Swal.fire({
          icon: "success",
          title: "Product updated successfully!",
          text: "Your product has been updated.",
        });
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        // You can show an error message here if needed
        Swal.fire({
          icon: "error",
          title: "Update failed",
          text: "There was an error updating the product.",
        });
      });
  };

  return (
    <div className="px-[160px] py-[100px]">
      <h2 className="text-[60px] text-[#1B3C35] font-medium mb-[10px]">
        Update products
      </h2>
      <p className="text-[#AEC3BE] text-[18px] font-normal mb-[38px]">
        Dolor consectetuer posuere maecenas tempor pede tellus. <br /> Nec eros
        curae luctus hac elementum penatibus pulvinar <br /> faucibus potenti
        vestibulum blandit.
      </p>
      <div className="bg-[#ECEDE8] rounded-[10px] py-[60px] px-[100px]">
        <form encType="multipart/form-data" onSubmit={handleUpdateProduct}>
          <div className="flex gap-[50px] mb-8">
            <div className="mb-[20px]">
              <h6 className="text-[#1B3C35] text-[20px] font-normal mb-2 ">
                Image
              </h6>
              <input
                className="rounded-[10px] w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#AEC3BE] text-[#1B3C35] outline-none"
                type="url"
                placeholder={image}
                name="image"
                defaultValue={image}
                onChange={handleChange}
              />
            </div>

            <div className="mb-[20px]">
              <h6 className="text-[#1B3C35] text-[20px] font-normal mb-2 ">
                Name
              </h6>
              <input
                className="rounded-[10px] w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#AEC3BE] text-[#1B3C35] outline-none"
                type="text"
                name="name"
                placeholder={name}
                defaultValue={name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex gap-[50px] mb-8">
            <div>
              <h6 className="text-[#1B3C35] text-[20px] font-normal mb-2 ">
                Brand
              </h6>
              <select
                className="rounded-[10px] w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#AEC3BE] text-[#1B3C35] outline-none"
                name="brand"
                placeholder={brand}
                defaultValue={brand}
                onChange={handleChange}
              >
                <option value={brand} disabled>
                  {brand}
                </option>
                <option value="samsung">Samsung</option>
                <option value="dell">Dell</option>
                <option value="logitech">Logitech</option>
                <option value="amazon">Amazon</option>
                <option value="apple">Apple</option>
                <option value="microsoft">Microsoft</option>
              </select>
            </div>

            <div>
              <h6 className="text-[#1B3C35] text-[20px] font-normal mb-2 ">
                Type
              </h6>
              <select
                className="rounded-[10px] w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#AEC3BE] text-[#1B3C35] outline-none"
                name="type"
                placeholder={type}
                defaultValue={type}
                onChange={handleChange}
              >
                <option value={type} disabled>
                  {type}
                </option>
                <option value="mobile">Mobile</option>
                                <option value="Headphone">Headphone</option>
                                <option value="Pc">Pc</option>
                                <option value="mac">Mac</option>
                                <option value="Others">Others</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <h6 className="text-[#1B3C35] text-[20px] font-normal mb-2">
              Price
            </h6>
            <input
              className="rounded-[10px] w-[250px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#AEC3BE] text-[#1B3C35] outline-none"
              type="number"
              placeholder={price}
              name="price"
              defaultValue={price}
              onChange={handleChange}
            />
          </div>

          {/* <div className="mb-8">
            <h6 className="text-[#1B3C35] text-[20px] font-normal mb-2">
              Rating
            </h6>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
            </div>
          </div> */}

          <div className="mb-9">
            <h6 className="text-[#1B3C35] text-[20px] font-normal mb-2">
              Description
            </h6>
            <input
              className="rounded-[10px] w-[850px] pt-[16px] pb-[100px] px-[16px] border-2 bg-[transparent] border-[#AEC3BE] text-[#1B3C35] outline-none"
              type="text"
              placeholder={description}
              name="description"
              defaultValue={description}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              className="px-8 py-4 bg-[#5F8172] text-white font-semibold text-[18px]"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
