import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { addProduct, deleteCart } from '../../redux/cart/CartSlice';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

const ModalCart = ({ product, open, onClose }) => {
     const [quantity, setQuantity] = useState(1);
     const [loading, setLoading] = useState(false);
     const dispatch = useDispatch();

     const handleAddToCart = () => {
          setLoading(true);
          dispatch(addProduct({ ...product, quantity }));
          setTimeout(() => {
               setLoading(false);
               onClose();
          }, 3000);
     };

     const handleClose = () => {
          onClose();
     };

     const handleDeleteFromCart = () => {
          dispatch(deleteCart(product));
          onClose();
     };

     return (
          <Modal
               title="Ürün Detayı"
               visible={open}
               onCancel={handleClose}
               footer={[
                    <Button key="back" onClick={handleClose}>
                         İptal
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleAddToCart}>
                         Sepete Ekle
                    </Button>,
               ]}
          >
               <div className="flex items-center mb-4">
                    <img
                         src={product.img}
                         alt=""
                         className="w-16 h-16 object-cover cursor-pointer mr-2"
                         onClick={handleDeleteFromCart}
                    />
                    <div className="flex flex-col">
                         <b>{product.title}</b>
                         <span>
                              {product.price}₺ x {quantity}
                         </span>
                    </div>
                    <div className="flex ml-auto">
                         <Button
                              type="primary"
                              size="small"
                              className="flex items-center justify-center rounded-full"
                              icon={<PlusCircleOutlined />}
                              onClick={() => setQuantity(quantity + 1)}
                         />
                         <span className="font-bold mx-2">{quantity}</span>
                         <Button
                              type="primary"
                              size="small"
                              className="flex items-center justify-center rounded-full"
                              icon={<MinusCircleOutlined />}
                              onClick={() => {
                                   if (quantity === 1) {
                                        handleDeleteFromCart();
                                   } else {
                                        setQuantity(quantity - 1);
                                   }
                              }}
                         />
                    </div>
               </div>
          </Modal>
     );
};

export default ModalCart;
