import pizza_img from "../assets/img/pizza.jpg";

function About(){
    return(
        <div className="flex flex-wrap justify-center items-center">
          <div className="ml-28 mt-24 mb-32">
            <h1 className="text-6xl text-green-500 font-extrabold">Welcome to</h1>
            <h1 className="text-6xl text-green-500 font-extrabold mt-1">The world of</h1>
            <h1 className="text-6xl text-white font-extrabold bg-red-500 mt-1 p-5 rounded-3xl">Tasty & Fresh Food</h1>
            <h1 className="italic text-3xl text-orange-600 font-bold">"Made with ❤️, Delivered with Care."</h1>
          </div>
          <img src={pizza_img} className="ml-36 mt-5 w-72 h-64" />
        </div>
    );
};

export default About;