import React, { Component } from 'react';

export default class Sku extends Component {

    setSelectedSku = (e) => {
        console.log(e.target.value)
        this.props.setSkuSelected(e.target.value)
    }

    render() {

        console.log(this.props)
        return (<>

            <select onChange={this.setSelectedSku}>
                <option hidden>Choose Sku</option>
                {this.props.skus && this.props.skus.map(element => <option value={element.sku} key={element.id}>{element.sku}</option>)}

            </select>

        </>)
    }
}