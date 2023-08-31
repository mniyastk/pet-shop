import React from "react";
import "../styles/carousal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function DogCarousal({ data }) {
  const [slide,setSlide]=useState(0)
  const nextSlide=()=>{
    setSlide(slide===data.length-1?0:slide+1)
  }
  const prevSlide=()=>{
    setSlide(slide===0?data.length-1:slide-1)
  }
  return (
    <div className="carousal">
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        className="carousal-left-arrow"
        onClick={prevSlide}
      />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide===idx?"carousal-img":"carousal-hidden"}
          />
        );
      })}
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        className="carousal-right-arrow"
        onClick={nextSlide}
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button key={idx} onClick={()=>{setSlide(idx)}} className={slide===idx?"slide-btns":"slide-btns slide-btns-gr"}></button>
          );
        })}
      </span>
    </div>
  );
}

export default DogCarousal;
