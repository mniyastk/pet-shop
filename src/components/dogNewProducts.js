import React from "react";

import '../styles/dogNewProducts.css'

import NewProductCard from "../components/newProductCard";
import { useContext } from "react";
import { MyContexts } from "./myContext";


function DogNewProducts() {
  const {currentData}=useContext(MyContexts)
  console.log(currentData);
  const dogProducts=currentData.filter((item)=>item.category==="dog");
  return (
    
    <div className="ndp-container">



      <div className="top-part">
        <img
        className="img-intro"
          src="https://cdn.media.amplience.net/i/petsathome/ctg-banner-latestoffers-save20-dtv2-v5_1/.webp?w=2100&"
          alt="dogtop"
        ></img>
        <h1>New Dog Products</h1>
        <hr />
        <p>
          Our catalogue of products is constantly refreshed to deliver the best
          quality, newest innovations and the most up-to-date accessories at any
          given time. If you're looking for a new toy, a seasonal treat or a new
          food product, you'll find it here. Don't miss our announcements - sign
          up to our newsletter to be among the first to learn about our newest
          additions!
        </p>
        <div className="newProducts">
        
          <NewProductCard data={dogProducts}/>
         
        </div>
      </div>
    </div>
  );
}

export default DogNewProducts;
