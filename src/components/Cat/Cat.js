import React from 'react'
import '../../styles/Cat.css'
import DogCarousal from "../DogCarousal";
import slides from "../../data/corousalData.json";
import cards from '../../data/dogProductData.json';
import ProductCard from "../prductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";


function Cat() {



  console.log(slides.cats);
  return (
    <div className='catContainer'>
      <div className="main-container">
      <div className="dog-catogory">
        <div className="dog-image-discript">
          <div className="text-container">
            <h1>Cat</h1>
            <p>
            Pets at Home has a wide range of cat supplies to suit any <br />
            cat; take a look at our selection of food and treats or <br />
            browse our other cat products to see everything on <br />
            offer!
            </p>
          </div>

          <img
            src="https://cdn.media.amplience.net/i/petsathome/dt-cat_1/.webp?w=400&"
            alt="catImage"
          />
        </div>
      </div>
      <article className="main-body">
      
        <div className="right-main">
          <DogCarousal data={slides.cats} />
          <div className="check-these-out">
            <h2>Check these out...</h2>
            <ProductCard data={cards.cats}/>
          </div>
          <div className="currentOffers">
            <h2 > <FontAwesomeIcon icon={faPaw} className="paw" />  Current offers & promotions</h2>
            <hr/>
           <img src="https://cdn.media.amplience.net/i/petsathome/cat-loz-pdd-august-applawscatfood/.webp?w=400&" alt="img1"></img>
           <img src="https://cdn.media.amplience.net/i/petsathome/cat-lozenge-phase-ever-clean/.webp?w=480&" alt="img2"></img>
           <img src="https://cdn.media.amplience.net/i/petsathome/cat-loz-pdd-august-cattowersv2/.webp?w=400&" alt="img3"></img>
           <img src="https://cdn.media.amplience.net/i/petsathome/pet-lozenge-phase-save-25-automatic-feeder/.webp?w=480&" alt="img4"></img>
           <img src="https://cdn.media.amplience.net/i/petsathome/cat-loz-newcatfood-v3/.webp?w=480&" alt="img5"></img>
           
          </div>
          <div className="highlightes">   <h2 > <FontAwesomeIcon icon={faPaw} className="paw" />   Highlightes </h2>
          <hr/>
        <img src="https://cdn.media.amplience.net/i/petsathome/cat-brands-petsbday/.webp?w=480&" alt="img1"></img>
        <img src="https://cdn.media.amplience.net/i/petsathome/cat-brands-ava_1/.webp?w=400&" alt="img2"></img>
        <img src="https://cdn.media.amplience.net/i/petsathome/cat-brands-seniorpetcare/.webp?w=480&" alt="img3"></img>
        </div>
        </div>
  
      </article>
      
      
    </div>
    </div>
    
  )
}

export default Cat
