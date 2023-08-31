import React from "react";
import "../Admin/home.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faList,
  faVault,
  faHome,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const AdminHome = () => {
  return (
    <div className="homeContainer">
      <div className="left-part">
        <h1>Admin</h1>
        <NavLink to={"/"}>
          <FontAwesomeIcon icon={faHome} className="homeIcon" />
        </NavLink>

        <ul>
          <Link to={"users"}>
            <li>
              <FontAwesomeIcon
                icon={faUser}
                size="sm"
                style={{ color: "#514343" }}
              />
              <span> </span>
              Users
            </li>
          </Link>
          <Link to={"products"}>
            <li>
              {" "}
              <FontAwesomeIcon
                icon={faList}
                style={{ color: "#1c2431" }}
              />{" "}
              <span></span> Products
            </li>
          </Link>
          <Link to={"revenue"}>
            {" "}
            <li>
              {" "}
              <FontAwesomeIcon icon={faVault} size="sm" /> <span></span>Revenue
            </li>
          </Link>
          <li>
            <Link to={"add"}>
              {" "}
              <FontAwesomeIcon icon={faPlus} style={{ color: "#d6dce5" }} />
              <span> Add Product</span>
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>

      <div className="top-part">
        {" "}
        <h1>HI ADMIN</h1>
      </div>
    </div>
  );
};

export default AdminHome;
