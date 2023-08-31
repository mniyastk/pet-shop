import React, { useContext, useState, useEffect } from "react";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faCaretDown,
  faBasketShopping,
  faCircleMinus,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
// import data from "../data/newDogProduct.json";
import { MyContexts } from "./myContext";
function Header() {
  const history = useNavigate();
  const {
    currentUser,
    currentData,
    login,
    setLogin,
    cartData,
    setCartData,
    totalAmount,
    setTotalAmount,
  } = useContext(MyContexts);
  const [toggle, setToggle] = useState(false);
  const handleCart = () => setToggle(!toggle);
  const [logtoggle, setLogToggle] = useState(false);

  const handleClick = () => setLogToggle(!logtoggle);

  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartCount] = useState(1);
  const cartDatas = cartData;
  console.log(cartDatas);

///  search function
  useEffect(() => {
    if (searchText === "") {
      setFilteredProducts([]);
    } else {
      const filteredData = currentData.filter((item) =>
        item.productName.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filteredData);
    }
  }, [searchText,currentData]);

  useEffect(() => {
    const filterData = cartData.filter(
      (item, index, self) =>
        index ===
        self.findIndex((obj) => obj.id === item.id && obj.name === item.name)
    );
    setCartData(filterData);
  }, [cartData.length]);

  const removeItem = (key) => {
    const filterData = cartData.filter((item) => item.key !== key);
    setCartData(filterData);
  };
  useEffect(() => {
    if (cartData.length !== 0) {
      const newTotalAmount = cartData.reduce((total, item) => {
        const itemTotal = item.price * item.count;
        return total + itemTotal;
      }, 0);

      setTotalAmount(newTotalAmount);
    }
  }, [cartData]);
 
// if(!login){
//   setCartData({})
// }

  const handleCartbtn = () => {
    if (!login) {
      alert("pls login First");
    }
  };
  const handlePayement = () => {
    if (cartData.length === 0) {
      alert("cart is empty");
    } else {
      history("/payment");
    }
  };
  const incriment = (key) => {
    const updatedCartData = cartData.map((item) => {
      if (item.key === key) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCartData(updatedCartData);
  };
  const decriment = (key) => {
    const updatedCartData = cartData.map((item) => {
      if (item.key === key && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setCartData(updatedCartData);
  };

  return (
    <header>
      <div className="h-top-list">
        <ul>
          <li>
            <a href="i">Find a Pet Care Centre</a>
          </li>
          <li>
            <a href="i">Vets for Pets</a>
          </li>
          <li>
            <a href="i">Pets VIP Club</a>
          </li>
          <li>
            <a href="i">Pet Insurance</a>
          </li>
          <li>
            <a href="i">Flea Subscription</a>
          </li>
          <li>
            <a href="i">Puppy & Kitten Club</a>
          </li>
        </ul>
      </div>
      <div className="h-bot-part">
        <Link to={"/"}>
          {" "}
          <img
            src="https://media.petsathome.com/wcsstore/pah-as01/images/redesign/new-logo.svg"
            alt="logo"
          />{" "}
        </Link>
    {/* search selection */}
        <div className="search-box">
          <input
            placeholder="What are you looking for today ?"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <button className="btn-log-in" onClick={handleClick}>
          {" "}
          <FontAwesomeIcon icon={faUser} /> My Account{" "}
          <FontAwesomeIcon icon={faCaretDown} />{" "}
        </button>
        <div className={logtoggle ? "user" : "nocart"}>
          <Link to={"/login"}>
            {" "}
            <button className="btn-sgn" onClick={() => setLogToggle(false)}>
              {" "}
              Sign In
            </button>
          </Link>
          <Link to={"/signUp"}>
            {" "}
            <button className="btn-sgn" onClick={() => setLogToggle(false)}>
              Sign Up
            </button>
          </Link>
          <Link to={"/"}>
            <button
              className={login ? "btn-sgn" : "nocart"}
              onClick={() => {
                setLogin(false);
                setLogToggle(false);
              }}
            >
              Sign Out
            </button>
          </Link>
        </div>
        <button className="btn-cart" onClick={handleCart}>
          {" "}
          <FontAwesomeIcon icon={faBasketShopping} />({cartData.length}) My
          Basket
        </button>
        <div
          className={toggle && login ? "cart" : "nocart"}
          onClick={handleCartbtn}
        >
          {cartData.length === 0 ? (
            <p>Your Cart Is Empty {currentUser}</p>
          ) : (
            cartData.map((item) => (
              <div className="cart_item_container" key={item.key}>
                <img src={item.image} alt="img" />
                <p>{item.name}</p>
                <h5>{(Number(item.price) * cartCount).toFixed(2)}</h5>
                <button onClick={() => decriment(item.key)}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleMinus}
                    size="sm"
                    style={{ color: "#185823" }}
                  />{" "}
                </button>{" "}
                <div> {item.count}</div>
                <button onClick={() => incriment(item.key)}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    size="sm"
                    style={{ color: "#185823" }}
                  />{" "}
                </button>
                <button onClick={() => removeItem(item.key)}>
                  {" "}
                  Delete Item{" "}
                </button>
              </div>
            ))
          )}
          <div className={cartData.length === 0 ? "no" : "total"}>
            <h5>total:${totalAmount.toFixed(2)}</h5>
            <button onClick={() => handlePayement()}> BUY NOW</button>
            <p>{currentUser}</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="catogory">
        <nav>
          <ul>
            <li>
              <Link to={"homePage"}> Latest Offers</Link>
            </li>
            <li>
              <Link to="dog">Dog</Link>
            </li>
            <li>
              <Link to="cat">Cat</Link>
            </li>
            <li>
              <Link >Small Animal</Link>
            </li>
            <li>
              <Link>Fish</Link>
            </li>
            <li>
              <Link>Reptile</Link>
            </li>
            <li>
              <Link>Bird & Wildlife</Link>
            </li>
            <li>
              <Link>Pet Advice</Link>
            </li>
            <li>
              <Link>Brands</Link>
            </li>
          </ul>
        </nav>
        {/* <Outlet /> */}
      </div>
      <div>
        <div className="searchResults">
          {filteredProducts.map((item, idx) => (
            <div className="card-container" key={idx}>
              <h4 className="title">{item.title}</h4>
              <img src={item.src} alt="cardImage" />
              <p className="card-description">{item.productName}</p>
              <p className="offer">{item.priceCut}</p>
              <h2 className="price">{item.price}</h2>
              <p className="prvs">{item.pastPrice}</p>
              <Link to={"/" + item.key}>
                <button className="card-btn">
                  <h3>More details</h3>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
