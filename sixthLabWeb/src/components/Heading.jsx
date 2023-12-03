import React from "react";
import { Link } from "react-router-dom";
import "./Heading.css"
import CardItem from "./CardItem";
import { Button } from "antd";
import ZooData from './ZooData';

function Heading(props) {

    const zooData = ZooData();
    const showAllButton = () => {
                    return (
                        <div>
                        <Link to="/Shop">
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
                                margin: '50px 0 0 600px', // Adjusted margin values
                                justifyContent: 'center',
                            }}
                            >
                            Show All
                            </Button>
                        </Link>
                        </div>
                    );
                    };
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
                            {zooData.map((item) => {
                                return(
                                    <CardItem item = {item}
                                />)
                            })}
                        </div>
                    </div>
                </div>
                {showAllButton()}
            </div>
        </>
    )
}
export default Heading;