import React from "react";
import { Card } from "antd";
import './cardItem.css';
import PrimaryButton from "./primaryButton";

const { Meta } = Card;

const CardItem = ({item }) => {
  console.log('ID:', item.id);

  return (
    <Card
      hoverable
      style={{ width: 350, borderRadius: "20px", backgroundColor: "lightgray" }}
      cover={
        <img style={{ borderRadius: "20px", width: "300px", height: "200px", margin: "25px" }} alt="example" src={item.image} />
      }
    >
      <Meta title={item.title} description={item.location} />
      <div className="cardFooter">
        <p>${item.price}</p>
        <PrimaryButton item = {item} >View More</PrimaryButton>
      </div>
    </Card>
  );
};


export default CardItem;