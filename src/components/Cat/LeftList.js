import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../../styles/DogInside.css'
const LeftListCat = () => {
  return (
    <div className="left-list">
    <h2>Browse By</h2>
    <nav>
      <ul>
        <li>
          <Link to={"newCat"} > New Cat Products </Link>
        </li>
        <hr />
        <li>
          <Link >Kitten </Link>
        </li>
        <hr />
        <li>
          <Link>Cat Food</Link>
        </li>
        <hr />
        <li>
          <Link>Cat Treats</Link>
        </li>
        <hr />
        <li>
          <Link>Flea, Tick & Wormers</Link>
        </li>
        <hr />
        <li>
          <Link>Cat Healthcare</Link>
        </li>
        <hr />
        <li>
          <Link>Cat Litter</Link>
        </li>
        <hr />
        <li>
          <Link>Litter Trays & Accessories</Link>
        </li>
        <hr />
        <li>
          <Link>Cat Flaps</Link>
        </li>
        <hr />
        <li>
          <Link>Scratching & Furniture</Link>
        </li>
        <hr />
        <li>
          <Link>Cat Beds</Link>
        </li>
        <hr />
        <li>
          <Link>Cat Toys</Link>
        </li>
        <hr />
        <li>
          <Link>Collars, Harnesses, Leads & Tags</Link>
        </li>
        <li>
          <Link>Carriers & Travel</Link>
        </li>
        <hr />
        <li>
          <Link>Bowls & Feeding Accessories</Link>
        </li>
        <hr />
        <li>
          <Link>Grooming & Clean Up</Link>
        </li>
        <hr />
        <li>
          <Link>Cat Training</Link>
        </li>
        <hr />
        <li>
          <Link>Pet Technology for Cats</Link>
        </li>
        <hr />
        <li>
          <Link>  Books, Gifts & Sundry</Link>
        </li>
      
      </ul>
    </nav>
    <Outlet/>
  </div>
  )
}

export default LeftListCat
