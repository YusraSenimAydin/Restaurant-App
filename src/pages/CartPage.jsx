import React, { useState } from "react";
import { Button, Card, message, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { decrease, deleteCart, increase } from "../redux/cart/CartSlice";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
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
      if (window.confirm("Ürünü silmek istiyor musunuz?")) {
        dispatch(decrease(item));
        message.success("Ürün Sepetten Silindi.");
      }
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
      <div className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cart.cartItems.map((item) => (
            <Card key={item.id} className="flex flex-col justify-between">
              <div>
                <img src={item.img} alt="" className="w-full h-32 object-cover" />
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.category}</p>
                <div className="flex items-center mt-2">
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
                </div>
              </div>
              <div className="mt-4">
                <span className="font-semibold">Toplam Fiyat:</span>
                <span className="ml-2">{(item.quantity * item.price).toFixed(2)}₺</span>
              </div>
              <div className="mt-4">
                <Popconfirm
                  title="Silmek için emin misiniz?"
                  onConfirm={() => handleDelete(item)}
                  okText="Evet"
                  cancelText="Hayır"
                >
                  <Button type="link" danger>
                    Sil
                  </Button>
                </Popconfirm>
              </div>
            </Card>
          ))}
        </div>
        <div className="cart-total flex justify-end mt-4">
          <Card className="w-full md:w-72">
            <div className="flex justify-between">
              <b>Genel Toplam</b>
              <b>{cart.total > 0 ? cart.total.toFixed(2) : 0}₺</b>
            </div>
            <Button
              className="mt-4 w-full"
              type="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
              disabled={cart.cartItems.length === 0}
            >
              Sipariş Oluştur
            </Button>
          </Card>
        </div>
      </div>
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default CartPage;
