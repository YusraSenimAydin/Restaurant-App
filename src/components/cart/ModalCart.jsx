import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { addProduct, deleteCart } from '../../redux/cart/CartSlice';
import { PlusCircleOutlined, MinusCircleOutlined, FileAddTwoTone } from '@ant-design/icons';


const ModalCart = ({ product, open, onClose }) => {
     const [quantity, setQuantity] = useState(1);
     const [loading, setLoading] = useState(false);
     const dispatch = useDispatch();

     const handleAddToCart = () => {
          if (quantity <= 0) return;
          setLoading(true);
          dispatch(addProduct({ ...product, quantity }));
          setTimeout(() => {
               setLoading(false);
               onClose(); // onClose prop'unu kullanın
          }, 2000);
     };

     const handleDeleteFromCart = () => {
          dispatch(deleteCart(product));
          setQuantity(1);
          onClose(); // onClose prop'unu kullanın
     };

     const handleQuantityChange = (newQuantity) => {
          if (newQuantity < 1) {
               handleDeleteFromCart();
          } else {
               setQuantity(newQuantity);
          }
     };

     return (
          <Modal
               title="Ürün Detayı"
               open={open}
               onCancel={onClose} // onClose prop'unu kullanın
               footer={[
                    <Button key="back" onClick={onClose}>
                         İptal
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleAddToCart}>
                         Sepete Ekle
                    </Button>,
               ]}
               maskClosable={false}
               maskTransitionName=""
          >
               <div className="flex items-center mb-4">
                    <img
                         src={product.img}
                         alt=""
                         className="w-16 h-16 object-cover cursor-pointer mr-2"
                         onClick={() => handleDeleteFromCart(product)}
                    />
                    <div className="flex flex-col flex-grow">
                         <b>{product.title}</b>
                         <span>
                              {product.price}₺ x {quantity}
                         </span>
                    </div>
                    <div className="ml-auto">
                         <Button
                              type="primary"
                              size="small"
                              className="flex items-center justify-center rounded-full"
                              icon={<PlusCircleOutlined />}
                              onClick={() => handleQuantityChange(quantity + 1)}
                         />
                         <span className="font-bold mx-2">{quantity}</span>
                         <Button
                              type="primary"
                              size="small"
                              className="flex items-center justify-center rounded-full"
                              icon={<MinusCircleOutlined />}
                              onClick={() => handleQuantityChange(quantity - 1)}
                         />
                    </div>
               </div>
               <Input size="large" placeholder="Ekstra" prefix={<FileAddTwoTone />} className="w-full" />
          </Modal>
     );
};

export default ModalCart;
