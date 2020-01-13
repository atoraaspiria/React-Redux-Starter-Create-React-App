import axios from "axios"
export const GET_COUNTRIES = "GET_COUNTRIES"
export function fetchCountries(){
    return function(dispatch){
        axios.get("https://restcountries.eu/rest/v2/all").then(response => {
            dispatch({type: GET_COUNTRIES,payload: response.data});
        })
    }
    
}