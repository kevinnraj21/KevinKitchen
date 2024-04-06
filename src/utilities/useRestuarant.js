import { useState, useEffect } from "react";


//Hook Code starts from here.
function useRestaurant(restaurantId) {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);
    async function getRestaurantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/plpage-type=REGULAR_MENUcomplete-menu=truelat=258560271lng=85.7868233&restaurantId=" + restaurantId?.id
        );
        const json = await data.json();
        // console.log(json);
        setRestaurantInfo( json.data?.cards[0]?.card?.card?.info );
        setRestaurantMenu( json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards );
        // now restaurantMenu is array of categories of food, ex -- [veg, dessert, non-veg, Soft beverages, Diwali quick pick, ...etc]
        // and each category has 'itemCards' which is array of items in that category.
    }


    if (restaurantMenu !== null && resMenu === null) {
        const abc = Array();
        for (let index = 1; index < restaurantMenu.length - 2; index++) {
            // i.e., restaurantMenu[index] is category of food.
            abc.push(restaurantMenu[index]?.card?.card?.itemCards);
        }   // now 'abc' array has arrays of items. ex -- [rasmalai, rabri, ...], [cocaCola, pepsi, sprite, ...], [veg thali, paneer, ...], ....
        
        const cde = Array();
        const mySet = new Set();
        for (let index = 0; index < abc?.length; index++) {
            if (abc[index] !== undefined) {
                for (let j = 0; j < abc[index]?.length; j++) {
                    if (mySet.has(abc[index][j]?.card?.info?.id) === false) {
                        cde.push(Object(abc[index][j]?.card?.info));
                        mySet.add(abc[index][j]?.card?.info?.id);
                    }
                }
            }
        }
        // Now, 'cde' is an array having each item-info from all categories ex --[rasmalai, paneer, pepsi, chicken, ....]
        if (resMenu == null) setResMenu(cde);
    }
    return [restaurantInfo, resMenu];
};

export default useRestaurant;