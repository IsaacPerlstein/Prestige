import React, { Component } from 'react';

export default class Parts extends Component {

    state = {
        companys: ['JWQ Cabinetry', 'American Royal'],
        multipliers: [
            { company: 'JWQ Cabinetry', multilplier: .25 },
            { company: 'American Royal', multilplier: .50 }
        ],
        items: [
            { item: 'WF342', sku: 'A R', com: 'American Royal', price: 50, id: 1 },
            { item: 'B33', sku: 'A R', com: 'American Royal', price: 150, id: 2 },
            { item: 'B33', sku: 'X R', com: 'American Royal', price: 30, id: 3 },
            { item: 'WF342', sku: 'X R', com: 'American Royal', price: 20, id: 4 },
            { item: 'TK8', sku: 'B P', com: 'JWQ Cabinetry', price: 20, id: 5 },
            { item: 'TK8', sku: 'Z P', com: 'JWQ Cabinetry', price: 25, id: 6 },
            { item: 'B33', sku: 'B P', com: 'JWQ Cabinetry', price: 80, id: 7 },
            { item: 'B33', sku: 'Z P', com: 'JWQ Cabinetry', price: 90, id: 8 },
            { item: 'WF342', sku: 'B P', com: 'JWQ Cabinetry', price: 150, id: 9 },
            { item: 'WF342', sku: 'Z P', com: 'JWQ Cabinetry', price: 150, id: 10 }
        ],
        itemSelected: null
    }

    setItemSelected = (e) => {
        console.log(e.target.value)
        const found = this.state.items.find(element => element.item === e.target.value)
        const selected = found ? found.item : null

        this.setState({
            itemSelected: selected
        })
        console.log(this.state.itemSelected)
        
        this.props.setItem(this.props.id, e.target.value,found)
        
    }

    setCompanyRow = (e) => {
        this.props.setCompanyRow(this.props.id, e.target.value)
    }
    setItem = (e) => {
        console.log('IN')
        
        this.props.setItem(this.props.id, e.target.value)
        
    }

    setSku = (e) => {
        console.log('in')
        this.props.setSku(this.props.id, e.target.value)
    }

    setQty = (e) => {
        this.props.setQty(this.props.id, e.target.value)
    }

    render() {
        const array = this.state.items.filter(element => {
            if ((element.item === this.state.itemSelected) && (element.com === this.props.companySelected)) {
                return true
            }
            return false
        })

        const foundPrice = this.state.items.find(element => element.item === this.props.item && element.sku === this.props.sku)
        const foundMultiplier = this.state.multipliers.find(element => element.company === this.props.companySelected)
        let totalPrice;
        if (foundPrice && foundMultiplier) {
            totalPrice = (foundPrice.price) * parseFloat(this.props.qty) * (foundMultiplier.multilplier)
            console.log(totalPrice)
        }
        return (<>
            <tr>
                <td>
                    <input placeholder='Enter Component' onChange={this.setItemSelected} value={this.props.item}></input>
                </td>
                <td>
                    <select onChange={this.setCompanyRow}>
                        <option hidden></option>
                        {this.state.companys.map(element => {
                            if (element === this.props.companySelected && this.props.item != null) {
                                return <option selected>{element}</option>
                            }
                            return <option>{element}</option>
                        })}
                    </select>
                </td>
                <td>
                    <select onChange={this.setSku} className='elementWidth' value={this.props.sku}>
                        <option hidden></option>
                        {array.map(element => {
                            /*if (element.sku === this.props.selectedSku) {
                                return <option selected key={element.id}>{element.sku}</option>
                            }*/
                            return <option key={element.id}>{element.sku}</option>
                        })}
                    </select>
                </td>
                <td>
                    <input type='number' min='1' className='numberWidth' value={this.props.qty} onChange={this.setQty}></input>
                </td>
                <td>
                    <div>{totalPrice}</div>
                </td>

            </tr>
        </>)
    }

}