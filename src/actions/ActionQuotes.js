import { FETCH_QUOTES,DELETE_QUOTES_BY_ID,EDIT_QUOTES_BY_ID} from './actionTypes/ActionTypes';
import axios from 'axios';

export const allQuotes = () => (dispatch) => {
    axios.get('../src/Json/fetch-all-quotes.json')
    .then(res => {
        if(res){
            dispatch({
                type: FETCH_QUOTES,
                payload: res.data
            });
        }
    });
};

export const deleteQuote=(index)=>(dispatch) =>{
    dispatch({
        type:DELETE_QUOTES_BY_ID,
        payload:index
    })
}
export const editQuote=(obj,ind)=>(dispatch)=>{
    dispatch({
        type:EDIT_QUOTES_BY_ID,
        payload:obj,ind
    })
}