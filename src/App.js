import "./App.css";

import DogInside from "./components/DogInside";
// import UserLogin from './components/userLogin';

import Error from "./components/Error";
import Header from "./components/Header";
import LeftList from "./components/LeftList";
// import LeftList from './components/LeftList';
import DogNewProducts from "./components/dogNewProducts";
import ProductView from "./components/productView";
import Puppy from "./components/pupy";

import UserLogin from "./components/userLogin";
import { Routes, Route } from "react-router-dom";
import { createContext } from "react";
// import MyContext from "./components/myContext";
import UserRegistration from "./components/userRegistration";
import { useState } from "react";
import { UserData } from "./data/userData";
import { MyContexts } from "./components/myContext";
import Payment from "./components/payment";
import AdminHome from "./components/Admin/adminHome";
import Users from "./components/Admin/adminUsers";
import Products from "./components/Admin/adminProducts";
import Revenue from "./components/Admin/adminRvenue";
import data from "./data/newDogProduct.json";
import Edit from "./components/Admin/editProduct";
import Home from "./components/pages/Home";
import Dog from "./components/Dog";
import Add from "./components/Admin/addProduct";
import Cat from "./components/Cat/Cat";
import Cats from "./components/pages/cat";
import NewCat from "./components/Cat/catNewProducts";
import HomePage from "./components/pages/homePage";

export const userContext = createContext();

function App() {
  const [userData, setUserData] = useState(UserData);

  const [login, setLogin] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [cart, setCart] = useState([]);
  const [productCount, setProductCount] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [currentUser, setCurrentUser] = useState("");
  const [inputText, setInputText] = useState("");
  const [currentData, setCurrentData] = useState(data.newProducts);
  // console.log(currentData);
  return (
    <>
      <MyContexts.Provider
        value={{
          productCount,
          cart,
          setCart,
          login,
          setLogin,
          userData,
          setUserData,
          cartData,
          totalAmount,
          setTotalAmount,
          setCartData,
          currentUser,
          setCurrentUser,
          inputText,
          setInputText,
          currentData,
          setCurrentData,
        }}
      >
        <Routes>
          <Route path="/home" element={<AdminHome />}>
            <Route index element={<Users />} />
            <Route path="users" element={<Users />} />

            <Route path="products" element={<Products />} />

            <Route path="/home/:id" element={<Edit />} />
            <Route path="revenue" element={<Revenue />} />
            <Route path="add" element={<Add />} />
          </Route>
          <Route path="/" element={<Home />}>
            <Route
              path=":id"
              element={
                <ProductView
                  count={productCount}
                  setCount={setProductCount}
                  setCartData={setCartData}
                />
              }
            />
            <Route index element={<HomePage />} />
            <Route path="homepage" element={<HomePage />} />
            <Route path="cat" element={<Cats/>}>
              <Route index element={<Cat/>}/>
              <Route path="newCat" element={<NewCat/>}/>

            </Route>
            <Route path="dog" element={<Dog />}>
              <Route index element={<DogInside />} />

              <Route path="new" element={<DogNewProducts />} />
            </Route>

      
          </Route>

          <Route path="*" element={<Error />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signUp" element={<UserRegistration />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </MyContexts.Provider>
    </>
  );
}

export default App;
