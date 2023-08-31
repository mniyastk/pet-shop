import React, { useContext, useEffect, useState } from "react";

import "../Admin/products.css";
import Search from "./adminSearch";
import { MyContexts } from "../myContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Products = () => {
  
  const { inputText, currentData, setCurrentData } = useContext(MyContexts);
  const [filteredProduct, setFilteredProducts] = useState(currentData);

  ///search Products///
  useEffect(() => {
    if (inputText === "") {
      setFilteredProducts(currentData);
    } else {
      const filtereds = currentData.filter((item) =>
        item.productName.toLowerCase().includes(inputText.toLowerCase())
      );
      setFilteredProducts(filtereds);
    }
  }, [currentData, filteredProduct, inputText]);

  ///delete products///
  const deleteItem = (product) => {
    console.log(product);
    const filteredProducst = currentData.filter((item) => item.key !== product);
    setCurrentData(filteredProducst);
  };

  return (
    <div className="products">
      <Search value={inputText} />
      <div className="usersList">
        {filteredProduct.map((item,idx) => {
          return (
            <div className="card-container" key={item.key}>
              <button className="btn1" onClick={() => deleteItem(item.key)}>
                <FontAwesomeIcon icon={faTrash} style={{ color: "grey" }} />
              </button>
              <Link to={'/home/'+item.id}>
                <button className="btn2">
                  {" "}
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              </Link>

              <img src={item.src} alt="cardImage" />
              <p className="card-discripion">{item.productName}</p>
              <p className="offer">{item.priceCut}</p>
              <div>
                <h2 className="price">${item.price}</h2>
              </div>
            </div>
          );
        })}
      </div>
      {/* <Outlet/> */}
    </div>
  );
};

export default Products;
