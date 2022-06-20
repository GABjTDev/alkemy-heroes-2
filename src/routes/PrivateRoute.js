import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { Auth } = useSelector((state) => state);
  let location = useLocation();

  if (!Auth.token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
