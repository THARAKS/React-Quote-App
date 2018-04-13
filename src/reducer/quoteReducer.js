import { FETCH_QUOTES,DELETE_QUOTES_BY_ID,EDIT_QUOTES_BY_ID } from "../actions/actiontypes/ActionTypes";

const initialState = {
  allQuotations: []
};

export default function (state = initialState,action) {
  switch(action.type){
    case FETCH_QUOTES:
    return {
      ...state,
      allQuotations:action.payload
    }
    case DELETE_QUOTES_BY_ID:
    return{
      ...state,
      allQuotations: state.allQuotations.filter(item => item !== action.payload)
    }
    case EDIT_QUOTES_BY_ID:
  let  objIndex = action

    return{
      ...state,
    }
    
    default:
    return state;
  }
}