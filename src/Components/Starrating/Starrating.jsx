import React from 'react';

const StarRating = ({ rating , fontsize }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div style={{ display: 'flex' }}>
      {/* Render full stars */}
      {Array(fullStars).fill().map((_, index) => (
        <div  key={`full-${index}`} style={{ color: 'red' , fontSize : fontsize }}>&#9733;</div> // Full star
      ))}

      {/* Render empty stars */}
      {Array(emptyStars).fill().map((_, index) => (
        <div key={`empty-${index}`} style={{ color: 'gray' , fontSize : fontsize  }}>&#9734;</div> // Empty star
      ))}
    </div>
  );
};

export default StarRating;
