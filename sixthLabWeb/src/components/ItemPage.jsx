import React from "react";
import { useParams } from "react-router-dom";
import ZooData from "./ZooData";

function ItemPage() {
    const { id } = useParams();
    const zooData = ZooData();
    const item = zooData.find((zoo) => zoo.id.toString() === { id }.toString());

    console.log(`ID itampage:`, id);
    console.log(item);
    console.log(zooData);
    
    return (
        <>  
        <p>Item ID: {item.id}</p>
        <p>Item name: {item.title}</p>
        <p>Item location: {item.location}</p>
            {/* <p>ItemID = {id}</p>   */}
        </>
    );
}
export default ItemPage;