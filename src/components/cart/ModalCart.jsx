import React, { useState } from 'react';
import { Button, Modal, Input, message, Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteCart, increase, decrease } from "../../redux/cart/CartSlice";
import { PlusCircleOutlined, MinusCircleOutlined, CloseOutlined, FileAddTwoTone } from '@ant-design/icons';


const ModalCart = ({ product, open, onClose }) => {
     const [quantity, setQuantity] = useState(1);
     const [loading, setLoading] = useState(false);
     const [extras, setExtras] = useState('');
     const cart = useSelector((state) => state.cart);
     const dispatch = useDispatch();

     const handleAddToCart = () => {
          if (quantity <= 0) return;
          setLoading(true);
          dispatch(addProduct({ ...product, quantity, extras }));
          setTimeout(() => {
               setLoading(false);
               onClose();
          }, 300);
     };

     const handleIncrease = () => {
          setQuantity(prevQuantity => prevQuantity + 1);
     };

     const handleDecrease = () => {
          if (quantity > 1) {
               setQuantity(prevQuantity => prevQuantity - 1);
          }
     };

     const handleClose = () => {
          setTimeout(() => {
               setLoading(false);
               onClose();
          }, 300);
     }

     return (
          <Modal
               title="Ürün Detayı"
               open={open}
               footer={[
                    <Button
                         key="cancel"
                         type="primary"
                         icon={<CloseOutlined />}
                         danger
                         loading={loading}
                         onClick={handleClose}
                    >
                         İptal
                    </Button>,
                    <Button
                         key="submit"
                         type="primary"
                         loading={loading}
                         onClick={handleAddToCart}
                    >
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
                              onClick={handleIncrease}
                         />
                         <span className="font-bold mx-2">{quantity}</span>
                         <Button
                              type="primary"
                              size="small"
                              className="flex items-center justify-center rounded-full"
                              icon={<MinusCircleOutlined />}
                              onClick={handleDecrease}
                              disabled={quantity === 1}
                         />
                    </div>
               </div>
               <Input
                    size="large"
                    placeholder="Ekstra"
                    prefix={<FileAddTwoTone />}
                    className="w-full"
                    onChange={(e) => setExtras(e.target.value)}
               />
          </Modal>
     );
};

export default ModalCart;
