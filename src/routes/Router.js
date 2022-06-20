import { useRoutes } from "react-router-dom";

//ROUTES
import Layout from "./Layout";

import TeamScreen from "../components/heroe/TeamScreen";
import LoginScreen from "../components/login/LoginScreen";
import HeroesScreen from "../components/heroe/HeroesScreen";
import HeroeScreen from "../components/heroe/HeroeScreen";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { success } from "../store/reducers/authSlice";
import {
  getHeroeStorage,
  getVillansStorage,
} from "../store/reducers/teamsSlice";

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("tokenAlkemy");
    const heroes = localStorage.getItem("heroesAlkemy");
    const villans = localStorage.getItem("villansAlkemy");

    if (token) dispatch(success({ ...JSON.parse(token) }));
    if (heroes) dispatch(getHeroeStorage({ heroes: [...JSON.parse(heroes)] }));
    if (villans)
      dispatch(getVillansStorage({ villans: [...JSON.parse(villans)] }));
  }, [dispatch]);

  let routes = [
    {
      path: "/login",
      element: (
        <PublicRoute>
          <LoginScreen />
        </PublicRoute>
      ),
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <PrivateRoute>
              <TeamScreen />
            </PrivateRoute>
          ),
        },
        {
          path: "/characters",
          element: (
            <PrivateRoute>
              <HeroesScreen />
            </PrivateRoute>
          ),
        },
        {
          path: "/character/:id",
          element: (
            <PrivateRoute>
              <HeroeScreen />
            </PrivateRoute>
          ),
        },
        {
          path: "*",
          element: (
            <PrivateRoute>
              <TeamScreen />
            </PrivateRoute>
          ),
        },
      ],
    },
  ];

  let elementRoutes = useRoutes(routes);

  return <>{elementRoutes}</>;
};

export default Router;
