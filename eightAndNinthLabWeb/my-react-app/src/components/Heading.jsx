import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./Heading.css"
import CardItem from "./CardItem";
import { Button } from "antd";
import 'C:/Users/Lenovo/WebLabs/eightAndNinthLabWeb/my-react-app/src/backend/server'

function Heading(props) {
    const [zooData, setZooData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('http://localhost:3001/api/zoos');
                setZooData(data);
            } catch (error) {
                console.error('Error fetching zoo data:', error);
            }
        };

        fetchData();
    }, []);
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
                    </div>
                </div>
                <div className="tileHeading">
                    <div>
                        <div className='CardWrapper'>
                                {zooData.map(({ title, text, image, price }) => (
                                    <CardItem
                                        key={id}
                                        title={title}
                                        text={text}
                                        imageSrc={image}
                                        price={price}
                                    />
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <Button
                    style={{
                        background: 'transparent',
                        backgroundColor: 'lightgray',
                        borderRadius: '20px',
                        color: 'black',
                        width: '250px',
                        height: '45px',
                        fontSize: '25px',
                        cursor: 'pointer',
                        margin: '50px 600px',
                        justifyContent: 'center',
                    }}
                    >
                    Show All
                    </Button>

                </div>
            </div>
        </>
    )
}

// const data = [
//   {
//     title: "Zoo of XII monthes",
//     text: "Kyiv",
//     image:'https://beton.kovalska.com/wp-content/uploads/2021/09/zoo-1.jpg',
//     price: 90,
//   },
//   {
//     title: "Feldman Ecopark",
//     text:"Kharkiv",
//     image:'https://www.sq.com.ua/img/news/2019/08/13/6.jpg',
//     price: 88,
//   },
//   {
//     title: "Kyiv Zoo",
//     text:"Kyiv",
//     image:'https://vechirniy.kyiv.ua/uploads/2022/11/24/637f3aed6ee8b.jpg',
//     price: 75,
//   },
// ];

export default Heading;