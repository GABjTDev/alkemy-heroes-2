import { useRoutes } from "react-router-dom";

//ROUTES
import Layout from "./Layout";

import TeamScreen from "../components/heroe/TeamScreen";
import LoginScreen from "../components/login/LoginScreen";
import HeroesScreen from "../components/heroe/HeroesScreen";
import HeroeScreen from "../components/heroe/HeroeScreen";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Router = () => {

    let routes = [
        {
          path: "/login",
          element: <PublicRoute><LoginScreen /></PublicRoute>
        },
        {
          path: "/",
          element: <Layout />,
          children: [
            { index: true, element: <PrivateRoute><TeamScreen /></PrivateRoute> },
            { path: "/heroes", element: <PrivateRoute><HeroesScreen /></PrivateRoute> },
            { path: "/heroe/:id", element: <PrivateRoute><HeroeScreen /></PrivateRoute> },
            { path: "*", element: <PrivateRoute><TeamScreen /></PrivateRoute> }
          ]
        }
      ];
      
    
    let elementRoutes = useRoutes(routes);
    
    return (
        <>
            {elementRoutes}
        </>
    )
}

export default Router
