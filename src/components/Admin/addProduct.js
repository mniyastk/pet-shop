import React, { useContext, useState } from "react";
import "./add.css";
import { MyContexts } from "../myContext";

const Add = () => {
  const { currentData, setCurrentData } = useContext(MyContexts);
  const [title, setTitle] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [url, setUrl] = useState();

  console.log(currentData);

  const addProduct = () => {
    setCurrentData([
      ...currentData,
      { title: title, src: url, price: price, productName: name },
    ]);
  };

  return (
    <div className="addContainer">
      <div className="innerContainer">
        <img src={url} alt="ENTER URL TO SEE IMG" />
        <div>
          <form>
            <label>Title :</label>
            <br />
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
            <br />
            <br />
            <label>Name :</label>
            <br />
            <input onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <label>Price :</label>
            <br />
            <input onChange={(e) => setPrice(e.target.value)} />
            <br />
            <br />
            <label>Image URL :</label>
            <br />
            <input onChange={(e) => setUrl(e.target.value)} />
            <br />
            <br />
            <span className="addBtn" onClick={() => addProduct()}>
              Add Product
            </span>
            <br />
          </form>
        </div>{" "}
      </div>
    </div>
  );
};

export default Add;
