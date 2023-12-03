import "./itemPage.css"
import React from "react";
<<<<<<< HEAD
import { useLocation, Link } from 'react-router-dom';
import { useState } from "react";
import Select from "./Select";
import { Button } from "antd";

=======
import {useLocation} from 'react-router-dom';;
>>>>>>> 4ba83cb8ff7213ff10139931a08bd8c25145b131

function ItemPage() {
    const location = useLocation();
    const item = location.state;
    console.log(item);
<<<<<<< HEAD
    const [selectedValueNumber, setSelectedValueNumber] = useState(null);

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

    const optionsValueNumber = [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
    ];

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
                        <p className="itemPagePole">Price:{item.price}$</p>
                        <p className="itemPagePole">Popularity Rating:{item.rating}/10</p>
                        <p className="itemPagePole">Contacts:{item.phone_number}</p>
                        <div className="selectAndButtonItemPage">
                            <Select className='selectItemPage'
                            options={optionsValueNumber}
                            value={selectedValueNumber}
                            onChange={handleSelectChangeValue}
                            placeholder='Tickets' />
                            <Button>Proceed</Button>
                        </div>
                        {backToShopButton()}
                    </div>
                </li>
            </ul>
           
        </div>
=======
    
    return (
        <>  
        <p>Item ID: {item.id}</p>
        <p>Item name: {item.title}</p>
        <p>Item location: {item.location}</p>
            <p>ItemID = {item.id}</p>  
        </>
>>>>>>> 4ba83cb8ff7213ff10139931a08bd8c25145b131
    );
}
export default ItemPage;