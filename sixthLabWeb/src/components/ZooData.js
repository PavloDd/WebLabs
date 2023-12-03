import { useState, useEffect } from "react";
import axios from "axios";

const attractions = [
  {
    id: 1,
    title: 'Zoo of XII monthes',
    location: 'Kyiv',
    image: 'https://beton.kovalska.com/wp-content/uploads/2021/09/zoo-1.jpg',
    price: 90,
    phone_number: '+380-50',
    rating: 7,
  },
  {
    id: 2,
    title: 'Feldman Ecopark',
    location: 'Kharkiv',
    image: 'https://www.sq.com.ua/img/news/2019/08/13/6.jpg',
    price: 88,
    phone_number: '+380-50-',
    rating: 9,
  },
  {
    id: 3,
    title: 'Kyiv Zoo',
    location: 'Kyiv',
    image: 'https://vechirniy.kyiv.ua/uploads/2022/11/24/637f3aed6ee8b.jpg',
    price: 75,
    phone_number: '+380-50-',
    rating: 10,
  },
];

const ZooData = () => {
  const [zooData, setZooData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const { data } = await axios.get("http://localhost:3001/api/zoos");
        setZooData(attractions);
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
