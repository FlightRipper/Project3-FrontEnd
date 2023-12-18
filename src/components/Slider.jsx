import React, { useState } from 'react';
import { TweenLite } from 'gsap';
import './Slider.css';


const Slider = ({milestonesData}) => {
  
console.log(milestonesData)
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    const nextIndex = (currentIndex + 1) % milestonesData.length;
    transitionToSlide(nextIndex);
  };

  const handlePrevSlide = () => {
    const prevIndex = (currentIndex - 1 + milestonesData.length) % milestonesData.length;
    transitionToSlide(prevIndex);
  };

  const transitionToSlide = (nextIndex) => {
    // Animations can be added here if needed
    const sWrapper = document.querySelector('.slider-wrapper');
    const sWidth = document.querySelector('.slide').clientWidth;

    setCurrentIndex(nextIndex);

    TweenLite.to(sWrapper, 0.4, { x: `-${sWidth * nextIndex}px` });
  };

  return (
    <div className="slider">
      <div className="slider-wrapper flex">
        {milestonesData.map((item, index) => (
          <div
            key={item._id}
            className={`slide flex ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="slide-image slider-link prev">
              <img src={`https://tpll-31oj.onrender.com/${item.image}`} alt="Slide" />
            </div>
            <div className="slide-content">
              <div className="slide-date">{`${new Date(item.createdAt).getDay()}.${new Date(item.createdAt).getMonth()}.${new Date(item.createdAt).getFullYear()}`}</div>
              <div className="slide-title">{item.title}</div>
              <div className="slide-text">{item.body.slice(0,300)}</div>
              <div className="slide-more">READ MORE</div>
            </div>
          </div>
        ))}
      </div>
      <div className="hasan-arrows">
        <button href="#" title="Previous" className="arrow slider-link prev" onClick={handlePrevSlide}></button>
        <button href="#" title="Next" className="arrow slider-link next" onClick={handleNextSlide}></button>
      </div>
    </div>
  );
};

export default Slider;