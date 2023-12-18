import { useState, useEffect } from "react";
import axios from "axios";

const ZooData = () => {
  const [zooData, setZooData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/api/zoos");
        setZooData(data);
        console.log("Data fetched");
      } catch (error) {
        console.error("Error fetching zoo data:", error);
      }
    };
      

    fetchData();
  }, []);

  return zooData;
};

export default ZooData;
