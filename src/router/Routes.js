import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";


const routes = [
  { path: "/", name: "Home", element: HomePage },
  { path: "/home", name: "home", element: HomePage },
  { path: "*", name: "404", element: PageNotFound },
 
];

export default routes;
