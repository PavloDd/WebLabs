import { useState, useEffect } from "react";
import axios from "axios";

const FilteredZooData = (filterParams) => {
    const [filteredZooData, setFilterZooData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.post("http://localhost:3001/api/zoos/filter", filterParams);
                setFilterZooData(data);
                console.log("Filtered data fetched");
            }
            catch (error) {
                console.error("Error fetching filtered zoo data", error);
            }
        };
        fetchData();
        
    }, [filterParams]);
    return filteredZooData;
};

export default FilteredZooData;