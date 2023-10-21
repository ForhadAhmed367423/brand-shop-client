/* eslint-disable react/prop-types */
const CartItem = ({ data }) => {
  const { name, brand, price, type } = data.product || {};
  return (
    <div>
      {/* row 2 */}
      <tr>
        <td className="text-[18px] text-[#000] pr-[60px]">{name}</td>
        <td className="text-[18px] text-[#000] pr-[60px]">{brand}</td>
        <td className="text-[18px] text-[#000] pr-[60px]">{price}</td>
        <td className="text-[18px] text-[#000] pr-[60px]">{type}</td>
      </tr>
    </div>
  );
};

export default CartItem;
