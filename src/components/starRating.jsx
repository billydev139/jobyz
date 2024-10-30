import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    if (onRatingChange) {
      onRatingChange(rate / 20); // converting to a scale of 1-5
    }
  };

  return (
    <div className="star-svg">
      <Rating
        onClick={handleRating}
        ratingValue={rating} // the rating value (0-100)
        size={25}
        label
        transition
        fillColor="orange"
        emptyColor="gray"
      />
    </div>
  );
};

export default StarRating;
