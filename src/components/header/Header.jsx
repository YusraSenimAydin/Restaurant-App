import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import "./index.css";

const Header = React.memo(() => {
  const cartItemsCount = useSelector((state) => state.cart.cartItems.length);

  console.log('Header rendered with cart items:', cartItemsCount);

  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-10">
        <div className="logo">
          <Link to="/">
            <h2 className="text-2xl font-bold sm:text-4xl">EMİN USTA</h2>
          </Link>
        </div>
        <div className="menu-links flex flex-wrap gap-4 sm:gap-10">
          <Link to="/" className="menu-link flex items-center flex-col sm:flex-row">
            <HomeOutlined className="text-xl sm:text-2xl" />
            <span className="text-xs sm:text-sm">Ana Sayfa</span>
          </Link>
          <Badge count={cartItemsCount} offset={[0, 0]} className="">
            <Link to="/cart" className="menu-link flex items-center flex-col sm:flex-row">
              <ShoppingCartOutlined className="text-xl sm:text-2xl" />
              <span className="text-xs sm:text-sm">Sepet</span>
            </Link>
          </Badge>
          <Link to="/" className="menu-link flex items-center flex-col sm:flex-row">
            <LogoutOutlined className="text-xl sm:text-2xl" />
            <span className="text-xs sm:text-sm">Çıkış</span>
          </Link>
        </div>
      </header>
    </div>
  );
}, (prevProps, nextProps) => {
  return true; 
});

export default Header;
