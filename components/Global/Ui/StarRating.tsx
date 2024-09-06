import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; // Import FontAwesome Star Icons

type StarRatingProps = {
  rating: number; // The rating number (e.g., 3 out of 5)
  maxRating?: number; // Optional, default is 5
};

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: maxRating }, (_, index) => {
        const starIndex = index + 1;
        return (
          <span key={index}>
            {starIndex <= rating ? (
              <FaStar color="#FFD700" /> // Filled star for the given rating
            ) : (
              <FaRegStar color="#FaD700" /> // Empty star for the rest
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
