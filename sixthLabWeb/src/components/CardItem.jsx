import React from "react";
import { Card } from "antd";
import './cardItem.css';
import PrimaryButton from "./primaryButton";

const { Meta } = Card;

const CardItem = ({item}) => {
  return (
    <Card
      hoverable
      style={{ width: 350, borderRadius: "20px", backgroundColor: "lightgray" }}
      cover={
<<<<<<< HEAD
        <img src ={item.image} style={{ borderRadius: "20px", width: "300px", height: "200px", margin: "25px" }}  alt="example"/>
=======
        <img style={{ borderRadius: "20px", width: "300px", height: "200px", margin: "25px" }} alt="example"/>
>>>>>>> 4ba83cb8ff7213ff10139931a08bd8c25145b131
      }
    >
      {/* <Meta title={item.title} description={item.location} />
      <div className="cardFooter">
        <p>${item.price}</p>
<<<<<<< HEAD
      </div>
=======
      </div> */}
>>>>>>> 4ba83cb8ff7213ff10139931a08bd8c25145b131
    </Card>
  );
};


export default CardItem;