import "./itemPage.css"
import React from "react";
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Button } from "antd";
import { useDispatch } from 'react-redux';
import { addItem } from './redux/actions';


function ItemPage() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigation = useNavigate();
    const item = location.state;
    console.log(item);
    const [selectedValueNumber, setSelectedValueNumber] = useState(null);

    const handleAddToCartButton = () => {
        dispatch(addItem(item))
    };

    const handleGoToCartButton = () => {
        navigation('/cart')
    };

    const backToShopButton = () => {
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
                                marginTop: '50px',
                                marginLeft: '80px',
                                justifyContent: 'center',
                            }}
                            >
                            Back
                            </Button>
                        </Link>
                        </div>
                    );
                    };


     const handleSelectChangeValue= (value) => {
        setSelectedValueNumber(value);
    };

    return (
        <div className="ItemPage">  
            <h1>{item.title}</h1>
            <ul className="itemPageCard">
                <li className="itemPageImage">
                    <img src={item.image} style={{ borderRadius: "20px", width: "500px", height: "400px", margin: "25px" }} alt="example" />
                </li>
                <li >
                    <div className="itemPagePoles">
                        <p className="itemPagePole">Location:{item.location}</p>
                        <p className="itemPagePole">Ticket price:{item.price}$</p>
                        <p className="itemPagePole">Popularity Rate:{item.rating}/10</p>
                        <p className="itemPagePole">Contacts:{item.phone_number}</p>
                        <div className="addAndGoToCartButtons">
                            <Button onClick={handleAddToCartButton}>Add to cart</Button>
                            <Button onClick={handleGoToCartButton}>Go to cart</Button>
                        </div>
                        {backToShopButton()}
                    </div>
                </li>
            </ul>
           
        </div>
    );
}
export default ItemPage;