import {Select} from 'antd';
import React, { useState} from 'react';
import './Shop.css'
import './Select'
import { Button } from 'antd/es/radio';
import './CardItemShop';
import CardItemShop from './CardItemShop';
import ZooData from './ZooData';
import { useEffect } from 'react';

function Shop(props) {
    const [selectedValuePrice, setSelectedValuePrice] = useState(null);
    const [selectedValueCity, setSelectedValueCity] = useState(null);
    const [selectedValuePopularity, setSelectedValuePopularity] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [isFilterApplied, setIsFilterApplied] = useState(false); // Новий стан для визначення, чи були застосовані фільтри
    const zooData = ZooData();

    const optionsPrice = [
    { value: '<90', label: '<90' },
    { value: '90>=', label: '90>=' },
];

    const optionsCity = [
    { value: 'Kharkiv', label: 'Kharkiv' },
    { value: 'Kyiv', label: 'Kyiv' },
    ];
    
    const optionsPopularity = [
        { value: 'high-low', label: 'high-low' },
        { value: 'low-high', label: 'low-high' },
    ];

    // useEffect(() => {
    //     // Apply filtering logic based on selected values
    //     let tempFilteredData = zooData;

    //     // Filter by city
    //     if (selectedValueCity) {
    //         tempFilteredData = tempFilteredData.filter((item) => item.location === selectedValueCity);
    //     }

    //     // Apply your other filters here if needed

    //     setFilteredData(tempFilteredData);
    // }, [selectedValueCity, zooData]);
  

    const handleSelectChangePrice = (value) => {
        setSelectedValuePrice(value);
    };

    const handleSelectChangeCity = (value) => {
        setSelectedValueCity(value);
    };

    const handleSelectChangePopularity = (value) => {
        setSelectedValuePopularity(value);
    };

<<<<<<< HEAD
    const handleApplyFilter = () => {
    // Apply filtering logic based on selected values
    let tempFilteredData = zooData;

    // Filter by city only if a specific city is selected
    if (selectedValueCity) {
        tempFilteredData = tempFilteredData.filter((item) => item.location === selectedValueCity);
    }

//     // Filter by price
//     if (optionsPrice.value === '<90') {
//     tempFilteredData = tempFilteredData.filter((item) => item.price < 90);
//         }

//     if (optionsPrice.value === '90>=') {
//     tempFilteredData = tempFilteredData.filter((item) => item.price >= 90);
//   }

    // Apply your other filters here if needed

    // Update filtered data only if any filter is selected
    setFilteredData(tempFilteredData);
    setIsFilterApplied(!!(selectedValueCity || selectedValuePrice)); // Встановлення флага тільки якщо хоча б один фільтр застосований
};
    const handleRestoreFilters = () => {
        // Reset all filters
        setSelectedValuePrice(null);
        setSelectedValueCity(null);
        setSelectedValuePopularity(null);
        setFilteredData([]); // Очистка відфільтрованих даних
        setIsFilterApplied(false); // Скидання флага
    };

    return (
        <>
            <div className={props.className}>
                <div className="Shop">
                    <ul style={{ margin: '50px 50px' }}>
                        <li className="filters">
                            <Select
                                options={optionsPrice}
                                value={selectedValuePrice}
                                onChange={handleSelectChangePrice}
                                placeholder="by alphabet"
                            />
                        </li>
                        <li className="filters">
                            <Select
                                options={optionsCity}
                                value={selectedValueCity}
                                onChange={handleSelectChangeCity}
                                placeholder="by city"
                            />
                        </li>
                        <li className="filters">
                            <Select
                                options={optionsPopularity}
                                value={selectedValuePopularity}
                                onChange={handleSelectChangePopularity}
                                placeholder="by popularity"
                            />
                        </li>
                        <li className="buttonApply">
                            <Button onClick={handleApplyFilter}>Apply</Button>
                        </li>
                        <li className="buttonRestoreFilters">
                            <Button onClick={handleRestoreFilters}>Restore Filters</Button>
                        </li>
                        
                    </ul>
                    <ul className="CardItemsShop">
                        {isFilterApplied ? (
                            // Render filtered data if filters are applied
                            filteredData.map((item) => (
                                <CardItemShop key={item.id} item={item} />
                            ))
                        ) : (
                            // Render all data if no filters are applied
                            zooData.map((item) => (
                                <CardItemShop key={item.id} item={item} />
                            ))
                        )}
                    </ul>
                </div>
=======
    console.log(zooData);

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
                        {/* <PrimaryButton onClick={() => console.log('Button clicked')}>
                            Apply
                        </PrimaryButton> */}
                    </li>
                </ul>
                <ul className='CardItemsShop'>
                    {zooData.map((item) => (<CardItemShop key={item.id} item={item}/>))}
                </ul>
>>>>>>> 4ba83cb8ff7213ff10139931a08bd8c25145b131
            </div>
        </>
    );
}

export default Shop;