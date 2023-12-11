import {Select, Input, Spin} from 'antd';
import React, { useState, useEffect} from 'react';
import './Shop.css'
import './Select'
import { Button } from 'antd/es/radio';
import './CardItemShop';
import CardItemShop from './CardItemShop';
import ZooData from './ZooData';
import FilteredZooData from './FilteredZooData';

function Shop(props) {
    const [selectedValuePrice, setSelectedValuePrice] = useState(null);
    const [selectedValueCity, setSelectedValueCity] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [isFilterApplied, setIsFilterApplied] = useState(false);
    const [loadingApply, setLoadingApply] = useState(false);
    const [filterParams, setFilterParams] = useState({});
    const filteredData = FilteredZooData(filterParams);
    const zooData = ZooData();

    const optionsPrice = [
    { value: 150, label: 'under 150$' },
    { value: 90, label: 'under 90$' },
];

    const optionsCity = [
    { value: 'Kharkiv', label: 'Kharkiv' },
    { value: 'Kyiv', label: 'Kyiv' },
    ];

    useEffect(() => {
        setLoadingApply(false);
    }, [filteredData]);

    const handleSelectChangePrice = (value) => {
        setSelectedValuePrice(value);
    };

    const handleSelectChangeCity = (value) => {
        setSelectedValueCity(value);
    };

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleApplyFilter = () => {
    setIsFilterApplied(true);
    setLoadingApply(true);
    setFilterParams({
      selectedValuePrice,
      selectedValueCity,
      searchText,
    });
    };

    const handleRestoreFilters = () => {
    setSelectedValuePrice(null);
    setSelectedValueCity(null);
    setSearchText('');
    setFilterParams({});
    setIsFilterApplied(false);
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
                                placeholder="by price"
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
                        <li className="search">
                            <Input
                                value={searchText}
                                onChange={handleSearchTextChange}
                                placeholder="Search by title"
                            />
                        </li>
                        <li className="buttonApply">
                            <Button onClick={handleApplyFilter}>Apply</Button>
                        </li>
                        <li className="buttonRestoreFilters">
                            <Button onClick={handleRestoreFilters}>Restore</Button>
                        </li>
                        <li>
                            <Spin spinning={loadingApply}/>
                        </li> 
                    </ul>
                    <ul className="CardItemsShop">
                        {isFilterApplied ? (
                            filteredData.map((item) => (
                                <CardItemShop key={item.id} item={item} />
                            ))
                        ) : (
                            zooData.map((item) => (
                                <CardItemShop key={item.id} item={item} />
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Shop;