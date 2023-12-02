import React from "react";
import {useLocation} from 'react-router-dom';;

function ItemPage() {
    const location = useLocation();
    const item = location.state;
    console.log(item);
    
    return (
        <>  
        <p>Item ID: {item.id}</p>
        <p>Item name: {item.title}</p>
        <p>Item location: {item.location}</p>
            <p>ItemID = {item.id}</p>  
        </>
    );
}
export default ItemPage;