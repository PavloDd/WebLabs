import React from "react";
import "../css/Success.css"
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function Success() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/shop');
    }

    return (
        <div className="successPage">
            <h1 style={{
                    marginTop: '80px',
                    marginBottom: '50px',
                }}>Success</h1>
            <p>Tickets was sent on your Email</p>
            <p>Penguin Paradise wishes you merry adventures in the zoo park!</p>
            <img src="https://i.pinimg.com/1200x/71/9e/21/719e2109847f237f14b7defd3af2709d.jpg"
                style={{
                    width: '550px',
                    height: '400px',
                    marginLeft: '370px'
                }}
                alt="penguin"></img>
            <div className="Button">
                <Button onClick={handleClick} style={{
                    marginTop: '50px',
                    marginBottom: '50px',
                    marginLeft: '600px'
                }}>Back to Shop</Button>
            </div>
        </div>
        
    )
}

export default Success;