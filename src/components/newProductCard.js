import React from 'react'
import '../styles/productCard.css'

import { Link } from 'react-router-dom'

function NewProductCard({data}) {

  return (

<div className='container'>{
  data.map((item,idx)=>{
      
    return (
      <div className='card-container' key={idx}>
      <h4 className='title'>{item.title}</h4>
      <img src={item.src} alt='cardImage'/>
      <p className='card-discripion'>{item.productName}</p>
      <p className='offer'>{item.priceCut}</p>
      <h2 className='price'>{item.price}</h2>
      <p className='prvs'>{item.pastPrice}</p>
      <Link to={'/'+item.key} ><button className='card-btn'> <h3>More details</h3> </button> </Link>

  </div>

    )
  })
 
  }</div>
   
  )
}
export default NewProductCard