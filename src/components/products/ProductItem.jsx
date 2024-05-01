import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cart/CartSlice';
import { message } from 'antd';
import ModalCart from '../cart/ModalCart';

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const handleClick = () => {
    dispatch(addProduct({ ...item, quantity: 1 }));
    message.success('Ürün Sepete Eklendi.');
  };

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none rounded-xl" onClick={handleModalOpen}>
      <div className="product-img">
        <img src={item.img} alt="" className="h-28 object-cover w-full border-b rounded-xl" />
      </div>
      <div className="product-info flex flex-col p-3">
        <span className="font-bold">{item.title}</span>
        <span>{item.price}₺</span>
      </div>
      <ModalCart  product={item} open={modalVisible} onClose={handleModalClose} /> 
    </div>
  );
};

export default ProductItem;