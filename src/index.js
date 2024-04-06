import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

// -------------------------------------------- importing Utilities --------------------------------------------//
// import UserContext from "./utilities/UserContext";
import Store from "./utilities/Store";

// -------------------------------------- importing components ------------------------------------------------ //
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";

// --------------------------------- Dynamic importing (Lazy Loading) -------------------------------------------//
const About = lazy(() => import("./components/About"));


// --------------------------------------------- Making app-layout --------------------------------------------//
const AppLayout = () => {
  // const [user, setUser] = useState({
  //   name: "Karan Raj",
  //   email: "karanraj827010@gmail.com",
  // });

	return (
		<Provider store={Store}>
			<Header />
			<Outlet />
			<Footer />
		</Provider>
	);
};

// ------------------------------------------ Routing of components --------------------------------------------- //
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/about",     // parentPath/{path} => for ex- localhost:1244/about
				element: (
					<Suspense fallback={<h1>Loading....</h1>}>
					<About />
					</Suspense>
				)
			},
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurant/:resId",
				element: <RestaurantMenu />,
			},
			{
				path: "/cart",
				element: <Cart />
			}
		]
	}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);




// ------------------------------------- initial Testing ----------------------//
// import React from "react";
// import ReactDOM from "react-dom";
// function AppLayout(){
//     return(
//         <>
//             <h1 className="bg-blue-700 font-bold">Testing successful</h1>
//         </>
//     );
// }
// root.render(<AppLayout />);
