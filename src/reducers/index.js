import { combineReducers } from 'redux';
import ReducerCountries from "./reducer_countries"
import RateExchangeReducer from "./reducer_rate_exchange"

const rootReducer = combineReducers({
  countriesReducer: ReducerCountries,
  rateExchangeReducer: RateExchangeReducer
});

export default rootReducer;
