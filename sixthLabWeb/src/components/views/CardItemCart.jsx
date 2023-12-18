import React from "react";
import { Button, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem } from "../redux/actions";
import "../css/cardItem.css"


const CardItemCart = ({ item }) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.itemQuantities[item.id]);

  const { Meta } = Card;

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <Card
      hoverable
      style={{ width: 350, borderRadius: "20px", backgroundColor: "lightgray" }}
      cover={
        <img src ={item.image} style={{ borderRadius: "20px", width: "300px", height: "200px", margin: "25px" }}  alt="example"/>
      }
    >
      <Meta title={item.title} description={item.location} />
      <span className="priceTag">{ item.price }$</span>
      <div className="cardFooter">
        <Button onClick={handleDecrease}>-</Button>
        <p>Quantity:{quantity}</p>
        <Button onClick={handleIncrease}>+</Button>
      </div>
      <Button onClick={handleRemove}>Remove</Button>
    </Card>
  );
};

export default CardItemCart;


