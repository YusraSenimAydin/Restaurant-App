import React, { useState } from "react";
import { Button, message, Popconfirm, Modal, Card } from "antd";
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
        okText: "Evet",
        cancelText: "Hayır",
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

  const totalPrice = cart.cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);

  return (
    <>
      <Header />
      <div className="px-3 flex flex-col h-full">
        <h2 className="text-2xl font-bold my-4 text-center">Sipariş Detayları</h2>

        <div className="overflow-y-auto flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cart.cartItems.map((item) => (
              <Card key={item.id} className="bg-white rounded-lg shadow-lg">
                <div className="flex items-center p-4 border-b border-gray-200">
                  <img src={item.img} alt={item.title} className="w-24 h-24 object-cover mr-6" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p>Ekstralar: {item.extras}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 border-b border-gray-200">
                  <div className="flex-1">
                    <p className="text-sm">Adet: {item.quantity}</p>
                    <p className="text-sm">Fiyat: {item.price} ₺</p>
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
                      disabled={item.quantity === 1}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center p-4">
                  <span className="">Toplam: {(item.quantity * item.price).toFixed(2)} ₺</span>
                  <Popconfirm
                    title="Bu ürünü silmek istediğinize emin misiniz?"
                    onConfirm={() => handleDelete(item)}
                    okText="Evet"
                    cancelText="Hayır"
                  >
                    <Button type="text" danger icon={<DeleteOutlined />} > Sil </Button>
                  </Popconfirm>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-end">
            <div className="flex items-center gap-3">
              <span className="text-xl">Toplam: {totalPrice} ₺</span>
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
      </div>
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default CartPage;
