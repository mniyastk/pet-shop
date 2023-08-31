import React, { useContext } from "react";
import "../Admin/search.css";
import { MyContexts } from "../myContext";

const Search = ({inputText}) => {
  const { setInputText } = useContext(MyContexts);
 
  return (
    <div className="search">
      <form>
        <input
          placeholder="Search"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
