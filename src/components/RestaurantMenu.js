import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { cloudinary_Img_URL } from "../utilities/config";
import useRestaurant from "../utilities/useRestuarant";


const RestaurantMenu = () => {

  //Reading dynamic URL params.
  const restaurantId = useParams(); //It returns an object -> {id:"#$@^%&&**^"}
  const [restaurantInfo, resMenu] = useRestaurant(restaurantId); //Self Created hook that lets you to fetch restaurantInfo and resMenu from swiggy's API.


  return resMenu === null ? (
    <Shimmer />
  ) : (
    <>
        <div className="bg-black text-white flex p-10">
            <img
                className="rounded-xl pl-72 w-[450]"
                src={cloudinary_Img_URL + restaurantInfo?.cloudinaryImageId}
                alt="Restaurant Image"
            />
            <div className="ml-24">
                <h2 className=" text-4xl mt-10">{restaurantInfo?.name}</h2>
                {/* <h3>{restaurantInfo?.area}</h3> */}
                <div className="flex mt-8">
                    {/* <h3>{restaurantInfo?.city}</h3> */}
                    {restaurantInfo?.avgRating < 3.5 ? (
                        <div className="flex flex-wrap ">
                            <h1 className="bg-red-500 rounded-md text-white px-1 py-1 m-1 font-bold font-xs ">
                                ★ {restaurantInfo?.avgRating}
                            </h1></div>
                    ) : (
                        <div className="flex flex-wrap ">
                            <h1 className="bg-green-500 rounded-md text-white px-1 py-1 m-1 font-bold font-xs ">
                                ★ {restaurantInfo?.avgRating}
                            </h1></div>
                    )}
                    <h3 className="mx-5 mt-2">|</h3>
                    <h3 className=" mt-2 font-semibold">{restaurantInfo?.costForTwoMessage}</h3>
                </div>
            </div>
        </div>
        <div className="mt-20 mx-72">
            <h1 className="font-bold text-gray-600">Recommended</h1>
            <h1 className="text-gray-500 mt-2">{resMenu.length} Items</h1>
            <ul>
                {resMenu.map((item) => (
                    <li key={item.id} className="font-bold text-gray-600 border-b-2 mt-16">{item.name}</li>
                ))}
            </ul>
        </div>
    </>
  );
};

export default RestaurantMenu;