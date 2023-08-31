import React, { useContext, useState } from "react";
import "../styles/productView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleMinus,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import datas from "../data/newDogProduct.json";
import { useParams, useNavigate } from "react-router-dom";
import { MyContexts } from "./myContext";

function ProductView({ count, setCount, setCartData }) {


  const navigate = useNavigate();
  const keys = useParams();
  console.log(keys.id);

  const currentDatas = datas.newProducts.filter((item) => {
    return item.key === keys.id;
  });

  const addToCart = () => {
    const existingCartItem = cartData.find(
      (item) => item.key === currentDatas[0].key
    );

    if (existingCartItem) {
      const updatedCart = cartData.map((item) =>
        item.key === currentDatas[0].key
          ? { ...item, count: item.count + count }
          : item
      );
      setCartData(updatedCart);
     
    } else {
      setCartData((prev) => [
        ...prev,
        {
          name: currentDatas[0].productName,
          image: currentDatas[0].src,
          count: count,
          price: currentDatas[0].actualPrice,
          key: currentDatas[0].key,
        },
      ]);
    }
    setCount(1);
  };
  console.log(currentDatas[0]);
  const [image,setImage]=useState(currentDatas[0].src)
  const { login, cartData } = useContext(MyContexts);
console.log(currentDatas);
  return (
    <div>
      {currentDatas.map((item,index) => {
        const price = item.actualPrice;
        console.log(price);
        const total = (price * count).toFixed(2);
        const amp = item.template.map((img) => item.link + img);
     

        return (
          <div key={index}>
            <div className="ProductView">
              <div className="list-images">
                <ul>
                  <li> <img src={item.src} alt="img" onClick={()=>setImage(item.src)}/> </li>
                  {amp.map((item,index) => (
                    <li key={index}>
                      <img src={item} alt="img" onClick={()=>setImage(item)}/>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="image-enlarge">
                <h3 className="title"> {item.title}</h3>
                <img src={image} alt="lrgImg" />
              </div>
              <div className="discription">
                <h3 className="productName">{item.productName}</h3>
                <h2>{item.price}</h2>
                <p>{item.size}</p>

                {item.productDescription.map((dis,idx) => (
                  <p key={idx}>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      size="sm"
                      style={{ color: "#0f8a23" }}
                    />
                    {dis}{" "}
                  </p>
                ))}
              </div>
              <div className="mini-cart">
                <div className="quntity">
                  <span> Quantity </span>{" "}
                  <button onClick={() => count > 1 && setCount(count - 1)}>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleMinus}
                      size="sm"
                      style={{ color: "#185823" }}
                    />{" "}
                  </button>{" "}
                  <div> {count}</div>
                  <button onClick={() => setCount(count + 1)}>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCirclePlus}
                      size="sm"
                      style={{ color: "#185823" }}
                    />{" "}
                  </button>
                </div>

                <div>
                  <h4>Total Amount : {total}</h4>{" "}
                </div>

                <button
                  className="cart-btn"
                  onClick={
                    login
                      ? () => {
                          addToCart();
                        }
                      : () => {
                          navigate("/login");
                          alert("pls login");
                        }
                  }
                >
                  {" "}
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bottom-offers">
              <div className="left">
                <h2>FREE</h2>
                <p>Click & Collect in as little as 1 hour</p>
              </div>
              <div className="right">
                <h2>FREE</h2>
                <p>Delivery on orders over £45</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductView;
