import React from "react";
import { Card, Button } from "antd";
import './cardItem.css';

const { Meta } = Card;

const CardItem = ({ title='No title.', text, imageSrc, price }) => (
  <Card
    hoverable
    style={{ width: 350, borderRadius: "20px", backgroundColor: "lightgrey" }}
    cover={
      <img style={{ borderRadius: "20px", width:"300px", height:"200px", margin: "25px" }} alt="example" src={imageSrc} />
    }
  >
    <Meta title={title} description={text} />
    <div className="cardFooter">
      <p>${price}</p>
      <Button>Show More</Button>
    </div>
  </Card>
);

export default CardItem;