import { combineReducers } from "redux";
import quoteReducer from './quoteReducer';

const rootReducer = combineReducers({
  allQuotations: quoteReducer
}
)
export default rootReducer;