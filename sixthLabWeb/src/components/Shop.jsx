import {Select} from 'antd';
import React, { useState} from 'react';
import './Shop.css'
import './Select'
import PrimaryButton from './primaryButton';
import './CardItemShop';
import CardItemShop from './CardItemShop';
import ZooData from './ZooData';

function Shop(props) {
    const [selectedValueABC, setSelectedValueABC] = useState(null);
    const [selectedValuePrice, setSelectedValuePrice] = useState(null);
    const [selectedValuePopularity, setSelectedValuePopularity] = useState(null);
    const zooData = ZooData();

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
                    {zooData.map((item) => (
                        <CardItemShop
                            key={item.id}
                            title={item.title}
                            location={item.location}
                            imageSrc={item.image}
                            price={item.price}
                            popularityRate={item.rating}
                            phoneNumber={item.phone_number}
                            />
                        ))}
                </ul>
            </div>
        </div>
    </>
}

export default Shop;