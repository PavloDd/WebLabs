import {Select} from 'antd';
import React, {useState} from 'react';
import './Shop.css'
import './Select'
import PrimaryButton from './primaryButton';
import './CardItemShop';
import CardItemShop from './CardItemShop';

function Shop(props) {
    const [selectedValueABC, setSelectedValueABC] = useState(null);
    const [selectedValuePrice, setSelectedValuePrice] = useState(null);
    const [selectedValuePopularity, setSelectedValuePopularity] = useState(null);

    const optionsABC = [
        { value: 'A-Z', label: 'A-Z' },
        { value: 'Z-A', label: 'Z-A' },
    ];
    const optionsPrice = [
        { value: 'high-low', label: 'high-low' },
        { value: 'low-high', label: 'low-high'},
    ];
    const optionsPopularity = [
        { value: 'high-low', label: 'high-low' },
        { value: 'low-high', label: 'low-high'},
    ];
    const handleSelectChangeABC = (value) => {
        setSelectedValueABC(value);
    };
    
    const handleSelectChangePrice = (value) => {
        setSelectedValuePrice(value);
    };

    const handleSelectChangePopularity = (value) => {
        setSelectedValuePopularity(value);
    };

    const data = [
  {
    title: "Zoo of XII monthes",
    text: "Kyiv",
    image:'https://beton.kovalska.com/wp-content/uploads/2021/09/zoo-1.jpg',
    price: 90,
    popularityRate: 7,
    description: '+380-50-464-12-12',
    
  },
  {
    title: "Feldman Ecopark",
    text:"Kharkiv",
    image:'https://www.sq.com.ua/img/news/2019/08/13/6.jpg',
    price: 88,
    popularityRate: 9,
    description: '+380-50-464-22-12',
  },
  {
    title: "Kyiv Zoo",
    text:"Kyiv",
    image:'https://vechirniy.kyiv.ua/uploads/2022/11/24/637f3aed6ee8b.jpg',
    price: 75,
    popularityRate: 10,
      description: '+380-50-464-42-12',
  },
  {
    title: "Kyiv Zoo",
    text:"Kyiv",
    image:'https://vechirniy.kyiv.ua/uploads/2022/11/24/637f3aed6ee8b.jpg',
    price: 75,
    popularityRate: 10,
      description: '+380-50-464-42-12',
        },
   
];

    return <>
        <div className={props.className}>
            <div className='Shop'>
                <ul style={{margin:'50px 50px'}}>
                    <li className='filters'>
                        <Select
                            options={optionsABC}
                            value={selectedValueABC}
                            onChange={handleSelectChangeABC}
                            placeholder='by alphabet' />
                    </li>
                    <li className='filters'>
                        <Select
                            options={optionsPrice}
                            value={selectedValuePrice}
                            onChange={handleSelectChangePrice}
                            placeholder='by price' />
                    </li>
                    <li className='filters'>
                        <Select
                            options={optionsPopularity}
                            value={selectedValuePopularity}
                            onChange={handleSelectChangePopularity}
                            placeholder='by popularity' />
                    </li>
                    <li className='buttonApply'>
                        <PrimaryButton onClick={() => console.log('Button clicked')}>
                            Apply
                        </PrimaryButton>
                    </li>
                </ul>
                <ul className='CardItemsShop'>
                    {data.map(item =>(
                        <li key={item.title}>
                            <CardItemShop
                                title={item.title} text={item.text} imageSrc={item.image}
                                price={item.price} popularityRate={item.popularityRate}
                                description={item.description}
                            />
                        </li>))}
                </ul>
            </div>
        </div>
    </>
}

export default Shop;