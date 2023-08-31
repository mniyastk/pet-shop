import React, { useContext, useState } from "react";
import "./edit.css";
import { useParams } from "react-router-dom";
import { MyContexts } from "../myContext";

const Edit = () => {
  const { currentData, setCurrentData } = useContext(MyContexts);
  const params = useParams();
  const currentProduct = currentData.filter((item) => item.id === params.id);

  const [title, setTitle] = useState(currentProduct[0].title);
  const [price, setPrice] = useState(currentProduct[0].price);
  const [productName, setProductName] = useState(currentProduct[0].productName);

  const updateProduct = () => {
    const editedProduct = currentData.map((item) =>
      item.id === params.id
        ? { ...item, title: title, price: price, productName: productName }
        : item
    );
    setCurrentData(editedProduct);
  };
  console.log(currentData);
  return (
    <div className="editProduct">
      <img src={currentProduct[0].src} alt="" />

      <form>
        <div className="formContainer">
          <div className="labelContainer">
            <label>Titlle :</label>
            <label>Product Name :</label>
            <label>price :</label>
          </div>
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <br />
            <span className="updateProduct" onClick={() => updateProduct()}>
          Update Product
        </span>
          </div>
        </div>

       
      </form>
    </div>
  );
};

export default Edit;
