import Router from "./routes/Router";
import { Provider } from 'react-redux';
import { storage } from './storage/storage';

const HeroeApp = () => {
    return (
        <Provider store={storage}>
            <Router />
        </Provider>
    )
}

export default HeroeApp
