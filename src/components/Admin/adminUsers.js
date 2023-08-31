import React, { useContext, useState, useEffect } from "react";
import "../Admin/users.css";
import Search from "./adminSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { MyContexts } from "../myContext";

const Users = () => {
  const { userData, setUserData, inputText } = useContext(MyContexts);
  const [filteredProducts, setFilteredProducts] = useState([userData]);

  ///user--search///
  useEffect(() => {
    if (inputText === "") {
      setFilteredProducts(userData);
    } else {
      const filterUser = userData.filter((item) =>
        item.email.toLowerCase().includes(inputText.toLowerCase())
      );
      setFilteredProducts(filterUser);
    }
  }, [inputText, userData]);

  ///user-deletion///
  const deleteUSer = (currentUser) => {
    const filteredUSers = userData.filter((item) => item.key !== currentUser);
    setUserData(filteredUSers);
  };

  return (
    <div className="usersContainer">
      <Search value={inputText} />
      <div className="usersList">
        {filteredProducts.map((user,id) => (
          <div className="userCard" key={id}>
            <FontAwesomeIcon icon={faUser} size="xl" />
            <h5>{user.email} </h5>
            <button onClick={() => deleteUSer(user.key)}> Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
