import {combineReducers} from 'redux';
import pokeTableReducer from './../components/PokeTable/PokeTableDuck';

const rootReducer = combineReducers({
    cards: pokeTableReducer
})

export default rootReducer;