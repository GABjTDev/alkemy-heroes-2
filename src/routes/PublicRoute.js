import { useSelector } from "react-redux"
import {
    useLocation,
    Navigate
} from "react-router-dom";

const PublicRoute = ({children}) => {

    const {user, token} = useSelector(state => state.auth);
    let location = useLocation();

    if(user && token){
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
}

export default PublicRoute;
