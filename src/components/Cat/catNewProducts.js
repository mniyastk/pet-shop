import React, { useContext } from "react";
import NewProductCard from "../newProductCard";
import "../../styles/cat/newCat.css";
import { MyContexts } from "../myContext";

function NewCat() {
  const{currentData}=useContext(MyContexts);
  const catProducts=currentData.filter((item)=>item.category==="cat");

  return (
    <div className="newCat"> 
      <div className="ndp-container">
        <div className="top-part">
          <img
            className="img-intro"
            src="https://cdn.media.amplience.net/i/petsathome/ctg-pdd-august23-dtv2/.webp?w=2100&"
            alt="catTop"
          ></img>
          <h1>New Cat Products</h1>
          <hr />
          <p>
            Pets at Home is always updating stock with new cat products. From
            toys and scratching posts to new foods they're sure to love, our
            range of cat products has everything you need for a contented cat!
          </p>
          <div className="newProducts">
            <NewProductCard data={catProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCat;
