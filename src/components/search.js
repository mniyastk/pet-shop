// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import data from '../data/newDogProduct.json';

// function Search() {
//   const [products, setProducts] = useState(data.newProducts);
//   const [searchText, setSearchText] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     if (searchText === '') {
//       setFilteredProducts([]);
//     } else {
//       const filteredData = products.filter((item) =>
//         item.productName.toLowerCase().includes(searchText.toLowerCase())
//       );
//       setFilteredProducts(filteredData);
//     }
//   }, [searchText, products]);

//   const handleSearchClick = () => {
//     setProducts(filteredProducts);
//   };

//   return (
//     <>
//       <div className="search-box">
//         <input
//           placeholder="What are you looking for today?"
//           type="text"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         ></input>
//         <button onClick={handleSearchClick}>Search</button>
//       </div>

//       <div>
//         {(searchText === '' ? products : filteredProducts).map((item, idx) => (
//           <div className="card-container" key={item.key}>
//             {
//         products.newProducts.map((item,idx)=>{
      
//     return (
//       <div className='card-container' key={item.key}>
//       <h4 className='title'>{item.title}</h4>
//       <img src={item.src} alt='cardImage'/>
//       <p className='card-discripion'>{item.productName}</p>
//       <p className='offer'>{item.priceCut}</p>
//       <h2 className='price'>{item.price}</h2>
//       <p className='prvs'>{item.pastPrice}</p>
//       <Link to={'/'+item.key} onClick={null} ><button className='card-btn'> <h3>More details</h3> </button> </Link>

//   </div>

//     )
//   })
 
//   }
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Search;

import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/newDogProduct.json';
import { MyContexts } from './myContext';

function Search() {
  const [products, setProducts] = useState(data.newProducts);
  const {login,setLogin}=useContext(MyContexts)
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchText === '') {
      setFilteredProducts([]);
    } else {
      const filteredData = products.filter((item) =>
        item.productName.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filteredData);
    }
  }, [searchText, products]);

  return (
    <>
      <div className="search-box">
        <input
          placeholder="What are you looking for today?"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
      </div>

      <div>
        {(searchText === '' ? products : filteredProducts).map((item, idx) => (
          <div className="card-container" key={item.key}>
            <h4 className='title'>{item.title}</h4>
            <img src={item.src} alt='cardImage'/>
            <p className='card-description'>{item.productName}</p>
            <p className='offer'>{item.priceCut}</p>
            <h2 className='price'>{item.price}</h2>
            <p className='prvs'>{item.pastPrice}</p>
            <Link to={'/'+item.key}><button className='card-btn'><h3>More details</h3></button></Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Search;

