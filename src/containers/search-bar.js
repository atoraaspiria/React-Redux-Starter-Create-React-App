import React, { Component } from 'react'
import { fetchCountries, fetchRateExchange } from '../actions/index'
import { connect } from "react-redux"
const lodash = require("lodash")
class SearchBar extends Component {
    componentWillMount(){
        this.props.fetchCountries()
    }
    renderSelectCountries () {
        return (
            <select onChange={e => this.onChangeCountry(e)} className="form-control search_bar">
                {this.props.countries.map(c => {
                   return ( <option key={c.code} value={c.code}>{c.name}</option> );
                })}
                <option />
            </select>
        )
    }
    onChangeCountry = e =>{
        const countryCode = e.target.value;
        const country = lodash.find(this.props.countries, {code:countryCode});
        this.props.fetchRateExchange(country);
    }
    render() {
        return (
            <form className="form-group">
                {this.renderSelectCountries()}
            </form>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        countries: store.countriesReducer.countries
    }
}
const mapDispatchToProps =  {
    fetchCountries,
    fetchRateExchange
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);