import React from 'react'
import '../styles/productCard.css'

function ProductCard({data}) {

  
  return (

<div className='container1'>{
  data.map((item,idx)=>{
      
    return (
      <div className='card-container' key={item.id}>
      <h4 className='title'>{item.title}</h4>
      <img src={item.src} alt='cardImage'/>
      <p className='card-discripion'>{item.discription}</p>
      <p className='offer'>{item.priceCut}</p>
      <h2 className='price'>{item.price}</h2>
      <p className='prvs'>{item.pastPrice}</p>
      <button className='card-btn'> <h3>More details</h3> </button>

  </div>

    )
  })
 
  }</div>
   
  )
}

export default ProductCard