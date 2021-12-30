import { useSelector } from "react-redux"
import {
    useLocation,
    Navigate
} from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, token} = useSelector(state => state.auth);
    let location = useLocation();

    if(!user && !token){
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
}

export default PrivateRoute
