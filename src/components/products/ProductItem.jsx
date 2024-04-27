import { addProduct } from "../../redux/cart/CartSlice";
import { useDispatch } from "react-redux";

const ProductItem = ({ item }) => {


  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct({ ...item, quantity: 1 }));
  };

  return (
    <div
      className="product-item border hover:shadow-lg cursor-pointer transition-all select-none"
      onClick={handleClick}
    >
      <div className="product-img">
        <img
          src={item.image}
          alt=""
          className="h-28 object-cover w-full border-b"
        />
      </div>
      <div className="product-info flex flex-col p-3">
        <span className="font-bold">{item.name}</span>
        <span>{item.price}₺</span>
      </div>
    </div>
  );
};

export default ProductItem;