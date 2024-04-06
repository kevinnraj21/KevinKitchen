import { Link } from "react-router-dom";
import KevinKitchen_logo from "../assets/img/KevinKitchen_logo.png";
// import {Link, useNavigate} from "react-router-dom";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from "./modal";

function Title(){
    return(
        <>
            <a href="/"><img className="h-20 px-3 py-3" src={KevinKitchen_logo} alt="logo" /></a>
        </>
    );
};

function Header() {
    return(
        <div className="flex justify-between bg-orange-300 shadow-xl">
            <Title />
            <ul className="flex py-5 px-10 justify-between">
                <li className="px-5 font-bold hover:bg-orange-500 hover:text-white hover:cursor-pointer rounded-md py-3">
                    <Link to={"/"}>Home</Link> </li>
                <li className="px-5 font-bold hover:bg-orange-500 hover:text-white hover:cursor-pointer rounded-md py-3">
                    <Link to={"/about"}> About</Link> </li>
                <li className="px-5 font-bold hover:bg-orange-500 hover:text-white hover:cursor-pointer rounded-md py-3">
                    <Link to={"/contact"}>Contact</Link> </li>
                {/* <li className="px-5 font-bold hover:bg-orange-500 hover:text-white hover:cursor-pointer rounded-md py-3">
                    <Link to={"/cart"}><ShoppingCartIcon /></Link> </li> */}
                <li className="px-5 font-bold hover:bg-orange-500 rounded-md"><Modal /></li>
            </ul>
        </div>
    );
};

export default Header;