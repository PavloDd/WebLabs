import React from "react";
import { Card } from "antd";
import PrimaryButton from "./primaryButton";
import './cardItem.css';

const { Meta } = Card;

const CardItemShop = ({ title='No title.', text, imageSrc, price, popularityRate, description }) => (
  <Card
    hoverable
    style={{ width: "350px", height: "500px", borderRadius: "20px", backgroundColor: "lightgray" }}
    cover={
      <img style={{ borderRadius: "20px", width:"300px", height:"200px", margin: "25px" }} alt="example" src={imageSrc} />
    }
  >
    <Meta title={title}/>
    <div className="cardFooterShop">
        <p className="cardPoles">{text}</p>   
        <p className="cardPoles">${price}</p>
        <p className="cardPoles">Popularity Rate - {popularityRate}</p>
        <p className="cardPoles">{description}</p>    
        <PrimaryButton className='primaryButtonViewMore' onClick={() => console.log('Button clicked')}>
            View more
        </PrimaryButton>
    </div>
  </Card>
);

export default CardItemShop;