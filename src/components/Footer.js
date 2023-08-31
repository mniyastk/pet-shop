import React from 'react'
import '../styles/footer.css'
import data from '../data/newDogProduct.json';
function Footer() {
  console.log(data.newProducts);
  return (
    <div className='footer-parent'>Footer</div>
  )
}

export default Footer