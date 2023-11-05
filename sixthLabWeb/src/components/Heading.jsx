import React from "react";
import "./Heading.css"
import CardItem from "./CardItem";
import { Button } from "antd";

function Heading(props) {
    return (
        <>
            <div className={props.className}>
                <div className="Heading">
                <div>
                    <img src='https://www.bodo.ua/resize/upload/files/cm-experience/103/102643/images_file/all_all_big-t1542032877-r1w768h425q90zc1.jpg' className="firstImage" alt='Penguin Paradise'/>
                </div>
                <div className="headingText">
                    <h1 className="Title">"Penguin Paradise Tickets: Explore the Zoo!"</h1>
                        <p>Welcome to Penguin Paradise – your ultimate guide to the world of amazing zoos!
                            Unforgettable adventures await you and your family at our carefully curated zoos worldwide.
                            With Penguin Paradise, purchasing tickets for zoo events and activities is easy and hassle-free.
                        </p>
                    <Button style={{background: 'transparent', borderRadius: '20px', color: 'black', width: '180px',
                            height: '30px', fontSize: '15px', cursor: 'pointer', backgroundColor: 'white', margin: '0 175px'}}>Show More</Button>

                </div>
                </div>
                <div className="tileHeading">
                    <div>
                        <div className='CardWrapper'>
                            {data.map(({ title, text, image, price }, idx) => (
                                <CardItem
                                    title={title}
                                    text={text}
                                    imageSrc={image}
                                    price={price}
                                    id={idx}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const data = [
  {
    title: "Zoo of XII monthes",
    text: "Kyiv",
    image:'https://beton.kovalska.com/wp-content/uploads/2021/09/zoo-1.jpg',
    price: 90,
  },
  {
    title: "Feldman Ecopark",
    text:"Kharkiv",
    image:'https://www.sq.com.ua/img/news/2019/08/13/6.jpg',
    price: 88,
  },
  {
    title: "Kyiv Zoo",
    text:"Kyiv",
    image:'https://vechirniy.kyiv.ua/uploads/2022/11/24/637f3aed6ee8b.jpg',
    price: 75,
  },
];

export default Heading;