import React, { Component } from 'react'
import { fetchCountries } from '../actions/index'
import { connect } from "react-redux"

class SearchBar extends Component {
    componentWillMount(){
        this.props.fetchCountries()
    }
    renderSelectCountries () {
        return (
            <select className="form-control search_bar">
                {this.props.countries.map(c => {
                   return ( <option key={c.code} value={c.code}>{c.name}</option> );
                })}
                <option />
            </select>
        )
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
    fetchCountries
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);