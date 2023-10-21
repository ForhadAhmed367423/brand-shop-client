import CartItem from "./CartItem";

/* eslint-disable react/prop-types */
const CartItems = ({ cartData }) => {
  console.log(cartData);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <thead>
              <tr>
                <th className="text-[24px] text-[#1B3C35] pr-[60px]">Name</th>
                <th className="text-[24px] text-[#1B3C35] pr-[60px]">Brand</th>
                <th className="text-[24px] text-[#1B3C35] pr-[60px]">Price</th>
                <th className="text-[24px] text-[#1B3C35] pr-[60px]">Type</th>
              </tr>
            </thead>
          </thead>
          <tbody>
            {Array.isArray(cartData) &&
              cartData.map((data, index) => (
                <CartItem key={index} data={data} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItems;
