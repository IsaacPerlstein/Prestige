import React, { Component } from 'react';

export default class Items extends Component {
    state = {
        items: [
            { item: 'WF342', sku: 'A R', com: 'American Royal', price: 50 },
            { item: 'B33', sku: 'A R', com: 'American Royal', price: 150 },
            { item: 'B33', sku: 'X R', com: 'American Royal', price: 30 },
            { item: 'WF342', sku: 'X R', com: 'American Royal', price: 20 },
            { item: 'TK8', sku: 'B P', com: 'JWQ Cabinetry', price: 20 },
            { item: 'TK8', sku: 'Z P', com: 'JWQ Cabinetry', price: 25 },
            { item: 'B33', sku: 'B P', com: 'JWQ Cabinetry', price: 80 },
            { item: 'B33', sku: 'Z P', com: 'JWQ Cabinetry', price: 90 },
            { item: 'WF342', sku: 'B P', com: 'JWQ Cabinetry', price: 150 },
            { item: 'WF342', sku: 'Z P', com: 'JWQ Cabinetry', price: 150 }
        ],
        selected: null,
        nameClass: "slc"

    }

    componentDidUpdate(n,o){
        console.log(n.skuSelected," ",this.props.skuSelected)
if(n.skuSelected!==this.props.skuSelected){
        const found = this.state.items.find(element => element.sku === this.props.skuSelected)
        this.props.itemSelected(this.state.selected, found)
        this.setState({
            selected: found,
            nameClass: "nnp"
        })
    }
    }

    getSelected = (e) => {
        
            console.log(e.target.value, 'the selection')
            const found = this.state.items.find(element => element.sku === e.target.value)
            this.props.itemSelected(this.state.selected, found)
            this.setState({
                selected: found,
                nameClass: "nnp"
            })

            console.log(found, 'Found')

        

    }

    render() {


        return <>
            <tr>
                <td>
                    {this.props.item}
                </td>
                <td>
                    <select className={this.state.nameClass} onChange={this.getSelected}>
                        <option value={null} hidden selected disabled></option>
                        {this.state.items.filter(item => item.item === this.props.item && item.com === this.props.selected).map(item => {
                            if(item.sku===this.props.skuSelected){
                                return <option selected value={item.sku}>{item.sku}</option>  
                            }else{
                            return <option value={item.sku}>{item.sku}</option>
                            }
                        })}

                    </select>
                </td>
            </tr>
        </>
    }

}