import React, { useState,useEffect } from 'react';


function Example(props) {
    
  // Declare a new state variable, which we'll call "count"
  const [orders, setOrders] = useState(null);
  const [quoteNum, setQuoteNum] = useState("");
  useEffect(() => {
    if(orders!==null){
    console.log(orders,'ORDERS')

    fetch('http://localhost:3000/orders', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orders)
      }).then(res=>res.json())
        .then(res => setQuoteNum(res[0].insertId));

        

    }
  },[orders]);
  




  return (
    <div>
      
      <button onClick={()=>setOrders(props.order)}>
        Save quote
      </button>
      <span>Quote#</span><span>{quoteNum}</span>
    </div>
  );
}

export default Example