import { useEffect, useState } from "react";
import { Fetch_Restaurants_URL } from "../utilities/config";
import { dummyRestaurantList } from "../utilities/SwiggyData";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import RestaurantList, {filterData} from "../utilities/RestaurantList";

function Body(){
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");
    function handleClick(){
        if (searchText === "") {
            setFilteredRestaurants(allRestaurants);
        }
        else{
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
        }
    }

    useEffect(() => {
        // getLiveRestaurants();
        const data = dummyRestaurantList
        setAllRestaurants(data);
        setFilteredRestaurants(data);
    },[]);
    async function getLiveRestaurants(){
        const data = await fetch(Fetch_Restaurants_URL);
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants);
    }


    return allRestaurants?.length === 0 ? (
        <Shimmer />
    ):(
        <div className="mb-20">
            {/* search box */}
            <div className="p-5 bg-white-100 my-2 mx-96">
                <input type="text" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value) } className="px-2 w-60 py-1 italic border-2 rounded-l-lg" />

                <button className="px-3 py-[5.5] bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded-r-lg" onClick={handleClick}>Search</button>
            </div>

            {/* displaying restaurants list */}
            <RestaurantList filteredRestaurants={filteredRestaurants} />
        </div>
    );
};

export default Body;