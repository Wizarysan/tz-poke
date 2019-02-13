import axios from 'axios'
import initialState from './../../store/initialState';
import settings from './../../settings';
import { Z_BUF_ERROR } from 'zlib';

const CARDS_REQUEST = "CARDS_REQUEST";
const CARDS_SUCCESS = "CARDS_SUCCESS";
//const CARDS_SET = "CARDS_SET";
const CARDS_FAIL = "CARDS_FAIL";

export default function pokeTableReducer(state = initialState.cards, action) {
    switch (action.type) {
        case CARDS_REQUEST:      
          return {...state, loading: true, error: false};
        case CARDS_FAIL:      
          return {...state, loading: false, error: true};
        case CARDS_SUCCESS:      
          return {...state, body: action.payload, loading: false, error: false};
        // case CARDS_SET:      
        //   return {...state, body: action.payload};
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
            console.log(res.data.cards)
            dispatch(cardsSuccess(res.data.cards))
        }).catch(err=>{
            console.err(err)
            dispatch(cardsFail())
        })
    }    
}