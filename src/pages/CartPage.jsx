import React, { useState } from "react";
import { Button, message, Popconfirm, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { decrease, deleteCart, increase } from "../redux/cart/CartSlice";
import { PlusCircleOutlined, MinusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import Header from "../components/header/Header";
import CreateBill from "../components/cart/CreateBill";

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrease = (item) => {
    dispatch(increase(item));
  };

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      Modal.confirm({
        title: "Ürünü silmek istiyor musunuz?",
        okText: "Yes",
        cancelText: "No",
        onOk: () => {
          dispatch(decrease(item));
          message.success("Ürün Sepetten Silindi..");
        },
      });
    } else {
      dispatch(decrease(item));
    }
  };

  const handleDelete = (item) => {
    dispatch(deleteCart(item));
    message.success("Ürün Sepetten Silindi.");
  };

  return (
    <>
      <Header />
      <div className="px-3">
        <h2 className="text-2xl font-bold my-4 text-center">Order Details</h2>
        {cart.cartItems.map((item) => (
          <div key={item.id} className="cart-item border border-gray-200 rounded-lg p-4 mb-4 flex items-center">
            <img src={item.img} alt={item.title} className="w-16 h-16 object-cover mr-4" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.category}</p>
              <p className="text-sm">{item.quantity} x {item.price} ₺</p>
            </div>
            <div className="flex items-center">
              <Button
                type="primary"
                className="rounded-full"
                icon={<PlusCircleOutlined />}
                onClick={() => handleIncrease(item)}
              />
              <span className="mx-2">{item.quantity}</span>
              <Button
                type="primary"
                className="rounded-full"
                icon={<MinusCircleOutlined />}
                onClick={() => handleDecrease(item)}
              />
              <Popconfirm
                title="Silmek için emin misiniz?"
                onConfirm={() => handleDelete(item)}
                okText="Yes"
                cancelText="No"
              >
                <Button type="text" danger icon={<DeleteOutlined />} />
              </Popconfirm>
            </div>
          </div>
        ))}
        <div className="cart-total flex justify-end mt-4">
          <div className="flex items-center gap-3">
            <span className="text-xl">Toplam: {cart.cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)} ₺</span>
            <Button
              type="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
              disabled={cart.cartItems.length === 0}
            >
              Sipariş Oluştur
            </Button>
          </div>
        </div>
      </div>
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default CartPage;
