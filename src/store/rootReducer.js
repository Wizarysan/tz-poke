import {combineReducers} from 'redux';
import pokeTableReducer from './../components/PokeTable/PokeTableDuck';
import singleCardReducer from '../components/SingleCard/SingleCardDuck';

const rootReducer = combineReducers({
    cards: pokeTableReducer,
    currentCard: singleCardReducer
})

export default rootReducer;