import axios from 'axios'
import initialState from './../../store/initialState';
import settings from './../../settings';

const CARD_REQUEST = "CARD_REQUEST";
const CARD_SUCCESS = "CARD_SUCCESS";
const CARD_FAIL = "CARD_FAIL";

export default function singleCardReducer(state = initialState.currentCard, action) {
    switch (action.type) {
        case CARD_REQUEST:      
          return {...state, loading: true, error: false};
        case CARD_FAIL:      
          return {...state, loading: false, error: true};
        case CARD_SUCCESS:      
          return {...state, body: action.payload, loading: false, error: false};
        default:
          return state;
      }
}

export function cardRequest() {
    return {type: CARD_REQUEST}
}
export function cardFail() {
    return {type: CARD_FAIL}
}
export function cardSuccess(card) {
    return {type: CARD_SUCCESS, payload: card}
}
export function loadSingleCard(id) {
    return dispatch => {
        dispatch(cardRequest())
        axios.get(`${settings.cardsApi}/${id}`)
        .then(res=> {
            dispatch(cardSuccess(res.data.card))
        }).catch(err=>{
            console.error(err)
            dispatch(cardFail())
        })
    }    
}