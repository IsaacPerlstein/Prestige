import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './parts';
import Company from './company';
import Sku from './sku';
import Counter from './counter'
import ClientType from './clientType'
import SaveOrder from './SaveOrder'

export default class App extends Component {
  state = {

    order: [],
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
    multipliers: [
      { company: 'JWQ Cabinetry', multilplier: .25 },
      { company: 'American Royal', multilplier: .50 }
  ],
    selectedCompany: null,
    selectedSku: null,
    companySkuRelation: [],
    rowId: 0,
    styles: [
      { sku: 'A R', com: 'American Royal' },
      { sku: 'X R', com: 'American Royal' },
      { sku: 'A P', com: 'JWQ Cabinetry' },
      { sku: 'B P', com: 'JWQ Cabinetry' },
      { sku: 'Z P', com: 'JWQ Cabinetry' }
    ],
    selectedSkuArray: [],
    selected: 'null',
    itemsSelected: [],
    refresh: true,

  }
  getBlogs = (blogs) => {

    this.setState({
      theblogs: blogs
    })
  }

  setItemsSelected = (removeItem, addItem) => {
    console.log(removeItem, 'removeItem')
    let newArray = this.state.itemsSelected;
    if (removeItem !== null) {
      newArray = this.state.styles.filter(element => element.sku !== removeItem.sku)
    }
    if (addItem !== null) {
      newArray.push(addItem)
      console.log(newArray, 'newArray')
      this.setState({
        itemsSelected: newArray
      })
    }

  }

  getSelected = (e) => {
    let newArray;
    if (this.state.selected !== e.target.value) {
      newArray = this.state.styles.filter(element => {
        return element.com === e.target.value
      })
      this.setState({
        selected: e.target.value,
        itemsSelected: [],
        refresh: true,
        selectedSkuArray: newArray

      })


    }

  }

  addRow = () => {
    const newArray = this.state.order
    let id = this.state.rowId
    newArray.push({ item: '', id: id++, company: null, sku: this.state.selectedSku, qty: 1,multilplier:0,price:0 })
    this.setState({
      order: newArray,
      rowId: id
    })
    console.log(this.state.order)
  }

  setCompany = (e) => {
    console.log(e.target.value)
    const newArray = this.state.order.map(element => {
      
      element.company = element.item!==""?e.target.value:""
      element.multilplier=this.state.multipliers.find(multi=>multi.company===e.target.value)
      element.sku = null
      return element
    })

    const skuOptions = this.state.items.filter(element => element.com === e.target.value)
    console.log(skuOptions)
    this.setState({
      selectedCompany: e.target.value,
      order: newArray,
      companySkuRelation: skuOptions
    })
  }


  setSkuSelected = (value) => {
    console.log(value, 'got in')
    const newArray = this.state.order.map(element => {
      element.sku = value
     
      return element
    })



    this.setState({
      selectedSku: value,
      order: newArray,

    })
  }

  setItem = (id, value, found) => {
    console.log(value, 'itemSelected')
    const newArray = this.state.order.map(element => {
      if (element.id === id) {
        element.item = value
        if (found) {
          element.company = this.state.selectedCompany;
          element.multilplier=this.state.multipliers.find(multi=>multi.company===this.state.selectedCompany).multilplier
          element.price=this.state.items.find(item=>{
            console.log(item.sku===this.state.selectedSku,"IN ",item.com===element.company)
            return (item.sku===this.state.selectedSku&&item.item===element.item)
           }).price
           console.log(element.price,"price")
        } else {
          element.company = null;
        }
      }
      return element
    })

    console.log(newArray)
    this.setState({
      order: newArray
    })

  }

  setQty = (id, value) => {
    console.log(value, 'itemSelected')
    const newArray = this.state.order.map(element => {
      if (element.id === id) {
        element.qty = value
      }
      return element
    })
    this.setState({
      order: newArray
    })

  }
  setCompanyRow = (id, value) => {
    const newArray = this.state.order.map(element => {
      if (element.id === id) {
        element.company = value
        element.multilplier=this.state.multipliers.find(multi=>multi.company===value).multilplier
        element.sku=null
      }
      return element
    })

    console.log(newArray)
    this.setState({
      order: newArray
    })

  }

  setSku = (id, value) => {
    console.log(id, value, 'VALUE')
    const newArray = this.state.order.map(element => {
      if (element.id === id) {
        element.sku = value
        element.price=this.state.items.find(item=>{
          console.log(item.sku===value," ",item.com===element.company)
          return item.sku===value&&item.com===element.company
         }).price
         console.log()
      }
      return element
    })
    this.setState({
      order: newArray
    })

  }

  
  render() {

console.log('hell')

    return (
      <>
      <SaveOrder order={this.state.order}/>
        <div className='slcWrapper'>
          <ClientType />
          <Company setCompany={this.setCompany} />
          <Sku setSkuSelected={this.setSkuSelected} skus={this.state.companySkuRelation} />
        </div>
        <br></br>

        <table>
          {this.state.order.map(item => <Item key={item.id} setQty={this.setQty} item={item.item} id={item.id} companySelected={item.company} setCompanyRow={this.setCompanyRow} setSku={this.setSku} sku={item.sku} setItem={this.setItem} selectedSku={this.state.selectedSku} qty={item.qty} />)}
        </table>
        <button onClick={this.addRow}>Add Row</button>
      </>

    )
    //}
  }
}


