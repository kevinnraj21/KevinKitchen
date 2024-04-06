import sadPizza from "../assets/img/sadPizza.jpg";
import RestaurantCard from "../components/RestaurantCard";
import { Link } from "react-router-dom";

export function filterData(searchText, allRestaurants){
	const filteredData = allRestaurants?.filter((restaurant) =>
		restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
	);
	return filteredData;
};

function RestaurantList( {filteredRestaurants} ){
	return filteredRestaurants.length===0 ? (
		<div className="flex flex-wrap justify-center items-center">
			<img src={sadPizza} alt="sad_pizza" className="h-52 w-60" />
			<h1 className="font-bold text-red-600 text-3xl">No Restaurant Found!!</h1>
		</div>
	):(
		<div className="flex flex-wrap mx-8 justify-between bg-orange-50">
			{ filteredRestaurants?.map((restaurant) => {
				return (
					<Link to={"restaurant/" + restaurant?.info?.id}>
						<RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
					</Link>
				);
			})}
		</div>
	);
};

export default RestaurantList;