import React, { Component } from 'react';

export default class Company extends Component {


    render(){
    

        return(<>
        <select onChange={this.props.setCompany}>
          <option hidden>Choose Company</option>
          <option>American Royal</option>
          <option>JWQ Cabinetry</option>

        </select>
        
        </>) 
    }
}