import React from "react";
import { Card } from "antd";
import PrimaryButton from "./primaryButton";
import './cardItem.css';

const { Meta } = Card;

const CardItemShop = ({ item }) => {
  console.log(item);
  return (
    <Card
      hoverable
      style={{ width: "350px", height: "500px", borderRadius: "20px", backgroundColor: "lightgray" }}
      cover={
        <img style={{ borderRadius: "20px", width:"300px", height:"200px", margin: "25px" }} alt="example" src={item.image} />
      }
    >
      <Meta title={item.title} />
      <div className="cardFooterShop">
        <p className="cardPoles">{item.location}</p>   
        <p className="cardPoles">${item.price}</p>
        <p className="cardPoles">Popularity Rate - {item.rating}</p>
        <p className="cardPoles">{item.phone_number}</p>    
        <PrimaryButton className='primaryButtonViewMore' item={item}>
          View more
        </PrimaryButton>
      </div>
    </Card>
  );
};

export default CardItemShop;
