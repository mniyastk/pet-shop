import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/DogInside.css'
function LeftList() {
  return (
    <div className="left-list">
    <h2>Browse By</h2>
    <nav>
      <ul>
        <li>
          <Link to="new"> New Dog Products </Link>
        </li>
        <hr />
        <li>
          <Link>Puppy </Link>
        </li>
        <hr />
        <li>
          <Link>Dog Food</Link>
        </li>
        <hr />
        <li>
          <Link>Dog Treats</Link>
        </li>
        <hr />
        <li>
          <Link>Flea, Tick & Wormers</Link>
        </li>
        <hr />
        <li>
          <Link>Dog Beds</Link>
        </li>
        <hr />
        <li>
          <Link>Dog Coats and Clothing</Link>
        </li>
        <hr />
        <li>
          <Link>Crates & Travel</Link>
        </li>
        <hr />
        <li>
          <Link>Collars, Harnesses, Leads & Tags</Link>
        </li>
        <hr />
        <li>
          <Link>Dog Toys</Link>
        </li>
        <hr />
        <li>
          <Link>Dog Grooming</Link>
        </li>
        <hr />
        <li>
          <Link>Dog Healthcare</Link>
        </li>
        <hr />
        <li>
          <Link>Poop & Clean Up</Link>
        </li>
        <li>
          <Link>Bowls & Feeding Accessories</Link>
        </li>
        <hr />
        <li>
          <Link>Kennels & Containment</Link>
        </li>
        <hr />
        <li>
          <Link>Pet Technology for Dogs</Link>
        </li>
        <hr />
        <li>
          <Link>Training & Agilit</Link>
        </li>
        <hr />
        <li>
          <Link>Books, Gifts & Sundry</Link>
        </li>
      </ul>
    </nav>
    <Outlet/>
  </div>
  )
}

export default LeftList