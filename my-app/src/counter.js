import React, { Component } from 'react';

export default class counter extends Component {

    state = {
        supplier: [
            { name: 'ching', multiplier: .25 },
            { name: 'chung', multiplier: .50 }
        ],
        selectedSupplier: null,
        customerType: [
            { category: 'residential', multiplier: 1.70 },
            { category: 'large residential', multiplier: 160 },
            { category: 'comercial', multiplier: 1.50 },
            { category: 'aggresive', multiplier: 1.30 }],
            
        categorySelected: null
    }


    setSelected = (e) => {
        const found = this.state.supplier.find(element => element.name === e.target.value)
        this.setState({
            selectedSupplier: found

        })
    }

    setCategory = (e) => {
        const found = this.state.customerType.find(element => element.category === e.target.value)
        this.setState({
            categorySelected: found

        })
    }

    render() {
        let count = 0

        this.props.selectedItems.forEach(element => {
            const suplimultiplier = this.state.selectedSupplier ? this.state.selectedSupplier.multiplier : 0
            const categorymultiplier = this.state.categorySelected ? this.state.categorySelected.multiplier : 0
            count += ((element.price) * suplimultiplier * categorymultiplier);
        });
        return <>
            <select onClick={this.setSelected}><option hidden></option>{this.state.supplier.map(supplier => <option>{supplier.name}</option>)}</select>
            <select onClick={this.setCategory}><option hidden></option>{this.state.customerType.map(type => <option>{type.category}</option>)}</select>
            <div>total Price= {count}</div>
        </>
    }

}