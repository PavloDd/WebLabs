import { useSelector } from "react-redux";
import CardItemCart from "../views/CardItemCart";
import { Button } from "antd";
import "../css/Cart.css";
import Form from "./Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const items = useSelector((state) => state.items);
  const itemQuantities = useSelector((state) => state.itemQuantities);
  const totalAmount = items.reduce((total, item) => {
    const quantity = itemQuantities[item.id] || 0;
    return total + item.price * quantity;
  }, 0);

  const navigate = useNavigate();

  // const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    navigate("/purchaseForm");
  };

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <ul className="CardItemsCart">
        {items.map((item) => (
          <CardItemCart item={item} key={item.id} />
        ))}
      </ul>
      <div className="purchasingCard">
        <span>{totalAmount}$</span>
        <Button onClick={handleButtonClick}>Next step</Button>
      </div>
    </div>
  );
}

export default Cart;