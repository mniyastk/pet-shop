import React from "react";
import "../styles/DogInside.css";

import DogCarousal from "./DogCarousal";
import slides from "../data/corousalData.json";
import cards from '../data/dogProductData.json'
import ProductCard from "../components/prductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";


function DogInside() {
  return (
    <div className="main-container">
      <div className="dog-catogory">
        <div className="dog-image-discript">
          <div className="text-container">
            <h1>Dog</h1>
            <p>
              All the products you need to keep your dog healthy, <br />
              happy and full of life are right here. From food and <br />
              treats to beds, collars and toys, our selection of dog <br />
              supplies covers it all.
            </p>
          </div>

          <img
            src="https://cdn.media.amplience.net/i/petsathome/dt-dog_1/.webp?w=400&"
            alt="dogImage"
          />
        </div>
      </div>
      <article className="main-body">
      
        <div className="right-main">
          <DogCarousal data={slides.slides} />
          <div className="check-these-out">
            <h2>Check these out...</h2>
            <ProductCard data={cards.cards} key={cards.cards.id}/>
          </div>
          <div className="currentOffers">
            <h2 > <FontAwesomeIcon icon={faPaw} className="paw" />  Current offers & promotions</h2>
            <hr className="line"/>
           <img src="https://cdn.media.amplience.net/i/petsathome/dog-loz-phase-wagg-dogfood/.webp?w=480&" alt="img1"></img>
           <img src="https://cdn.media.amplience.net/i/petsathome/dog-lozenge-phase-royal-canin-dog-food/.webp?w=480&" alt="img2"></img>
           <img src="https://cdn.media.amplience.net/i/petsathome/dog-lozenge-phase-b1g1hp-jwb-dog-food_1/.webp?w=480&" alt="img3"></img>
           <img src="https://cdn.media.amplience.net/i/petsathome/dog-lozenge-dog%20crates/.webp?w=480&" alt="img4"></img>
           <img src="https://cdn.media.amplience.net/i/petsathome/dog-lozenge-doggy-parton-v4_1/.webp?w=480&" alt="img5"></img>
           
          </div>
          <div className="highlightes">   <h2 > <FontAwesomeIcon icon={faPaw} className="paw" />   Highlightes </h2>
          <hr  className="line"/>
        <img src="https://cdn.media.amplience.net/i/petsathome/dog-brands-seniorpetcare-test1/.webp?w=480&" alt="img1"></img>
        <img src="https://cdn.media.amplience.net/i/petsathome/dog-brands-newness-collars_3/.webp?w=480&" alt="img2"></img>
        <img src="https://cdn.media.amplience.net/i/petsathome/dog-brands-summer-sports-v2/.webp?w=480&" alt="img3"></img>
        </div>
        </div>
  
      </article>
      
      
    </div>
  );
}

export default DogInside;
