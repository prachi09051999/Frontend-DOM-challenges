import { useState, useEffect } from 'react';
import './App.scss';
import Star from './Components/Star/index';

/* Static array containing all possible ratings */
const starArr = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

function App() {
  /* starElements state containing all the stars rendered in DOM */
  const [starElements, setStarElements] = useState([]);

  /* initial rating value */
  const [starRating, setStarRating] = useState(0);

  /* setting starElements to the HTML collection of star class (It'll contain list of elements with all posible rating) */
  useEffect(function () {
    setStarElements(document.getElementsByClassName('star'));
  }, []);

  /* Removing fill class which fill the stars after click */
  const removeFillStar = function () {
    setStarRating(0);
    for (const i of starElements) {
      i.classList.remove('fill');
    }
  }

  /* Adding fill class which fill the stars upto a certain element which was clicked */
  const fillStar = function (e) {
    removeFillStar();
    const rating = e.target.closest('.star') && +e.target.closest('.star').getAttribute('id');
    setStarRating(rating.toFixed(1));
    for (const i of starElements) {
      i.classList.add('fill');
      if (+i.getAttribute('id') === rating) break;
    }
  }

  /* Hovering over the stars using hover class upto the element targetted in mouseover event and hoverStar function */
  const hoverStar = function (e) {
    const rating = e.target.closest('.star') && +e.target.closest('.star').getAttribute('id');
    for (const i of starElements) {
      i.classList.add('hover');
      if (+i.getAttribute('id') === rating) break;
    }
  }

  /* Removing hover class using mouseout event and removeHoverStar function */
  const removeHoverStar = function () {
    for (const i of starElements) {
      i.classList.remove('hover');
    }
  }

  /* A card component containing all the half and full stars with unique rating */
  return (
    <div className="card">
      <div className="star-container" onClick={fillStar} onMouseOver={hoverStar} onMouseOut={removeHoverStar}>
        {starArr.map((star) => <Star key={star} id={star} />)}
      </div>
      <p className="rating">Current Rating: {starRating}</p>
    </div>
  );
}

export default App;
