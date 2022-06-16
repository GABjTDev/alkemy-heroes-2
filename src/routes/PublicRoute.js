import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { Auth } = useSelector((state) => state);
  let location = useLocation();

  if (Auth.token) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default PublicRoute;
