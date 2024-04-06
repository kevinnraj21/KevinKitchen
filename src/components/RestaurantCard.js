import { cloudinary_Img_URL } from "../utilities/config";

function RestaurantCard({ name, cuisines, cloudinaryImageId, avgRatingString, costForTwo, sla }){
    return(
        <div className="w-64 bg-gray-100 m-5 p-5 rounded-lg shadow-md">
            <img className="object-fill  w-52 h-48   rounded-xl" src={cloudinary_Img_URL+cloudinaryImageId} alt="restaurant" />

            <h2 className="font-bold text-xl">{name}</h2>
            <h3 className="text-xs flex flex-wrap"> {cuisines.join(", ")} </h3>

            <div className="flex flex-wrap">
                {avgRatingString < "3.5" ? (
                <button className="bg-red-500 rounded-md text-white px-1 py-1 m-1 font-bold font-xs">
                    ★ {avgRatingString}
                </button>
                ) : (
                <button className="bg-green-500 rounded-md text-white px-1 py-1 m-1 font-bold font-xs">
                    ★ {avgRatingString}
                </button>
                )}

                <h1 className="text-xs font-bold  pt-4">
                {" "}
                ● {sla?.slaString} ● {costForTwo}
                </h1>
            </div>
        </div>
    );
}

export default RestaurantCard;