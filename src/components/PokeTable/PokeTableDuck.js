import axios from 'axios'
import initialState from './../../store/initialState';
import settings from './../../settings';

const CARDS_REQUEST = "CARDS_REQUEST";
const CARDS_SUCCESS = "CARDS_SUCCESS";
const CARDS_FAIL = "CARDS_FAIL";

export default function pokeTableReducer(state = initialState.cards, action) {
    switch (action.type) {
        case CARDS_REQUEST:      
          return {...state, loading: true, error: false};
        case CARDS_FAIL:      
          return {...state, loading: false, error: true};
        case CARDS_SUCCESS:      
          return {...state, body: action.payload, loading: false, error: false};
        default:
          return state;
      }
}

export function cardsRequest() {
    return {type: CARDS_REQUEST}
}
export function cardsFail() {
    return {type: CARDS_FAIL}
}
export function cardsSuccess(cards) {
    return {type: CARDS_SUCCESS, payload: cards}
}
export function loadCards() {
    return dispatch => {
        dispatch(cardsRequest())
        axios.get(settings.cardsApi)
        .then(res=> {
            dispatch(cardsSuccess(res.data.cards))
        }).catch(err=>{
            console.error(err)
            dispatch(cardsFail())
        })
    }    
}