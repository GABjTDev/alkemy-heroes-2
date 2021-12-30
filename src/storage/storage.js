import { createStore } from 'redux'
import reducer from '../reducers/rootReducers';

export const storage = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

if(localStorage.getItem('authAlkemy')){
    storage.getState().auth = JSON.parse(localStorage.getItem('authAlkemy'))
}

if(localStorage.getItem('heroesAlkemy')){
    storage.getState().teams.heroesTeam = JSON.parse(localStorage.getItem('heroesAlkemy'))
}

if(localStorage.getItem('villansAlkemy')){
    storage.getState().teams.villansTeam = JSON.parse(localStorage.getItem('villansAlkemy'))
}
