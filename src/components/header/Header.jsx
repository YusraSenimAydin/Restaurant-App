import { Link } from "react-router-dom";
import { Badge, Input } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import "./index.css";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  console.log(cart.cartItems);
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <Link to="/">
            <h2 className="text-2xl font-bold md:text-4xl">EMIN USTA</h2>
          </Link>
        </div>
        <div className="menu-links">
          <Link to={"/"} className="menu-link">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Ana Sayfa</span>
          </Link>
          <Badge
            count={cart.cartItems.length}
            offset={[0, 0]}
            className=""
          >
            <Link to={"/cart"} className="menu-link">
              <ShoppingCartOutlined className="md:text-2xl text-xl" />
              <span className="md:text-xs text-[10px]">Sepet</span>
            </Link>
          </Badge>
          <Link to={"/"} className="menu-link">
            <LogoutOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Çıkış</span>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;