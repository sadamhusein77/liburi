import React from 'react';

interface RatingStarsProps {
  rating: number;       // E.g. 4.3
  maxStars?: number;    // Default 5
  className?: string;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, maxStars = 5, className }) => {
  const stars = [];

  for (let i = 0; i < maxStars; i++) {
    const filled = i < Math.floor(rating);
    const isHalf = i === Math.floor(rating) && rating % 1 !== 0;

    if (filled) {
      stars.push(<FullStar key={i} />);
    } else if (isHalf) {
      stars.push(<HalfStar key={i} />);
    } else {
      stars.push(<EmptyStar key={i} />);
    }
  }

  return <div className={`flex ${className}`}>{stars}</div>;
};

const starStyle = "w-9 h-9 text-yellow-400";

const FullStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className={starStyle}>
    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const HalfStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 24 24" className={starStyle}>
    <defs>
      <linearGradient id="half-grad">
        <stop offset="50%" stopColor="currentColor" />
        <stop offset="50%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <path strokeLinejoin="round" strokeWidth={1} strokeLinecap="round" fill="url(#half-grad)" d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const EmptyStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className={starStyle}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.134 6.57h6.905c.969 0 1.371 1.24.588 1.81l-5.59 4.06 2.133 6.57c.3.92-.755 1.688-1.538 1.117L12 18.26l-5.583 4.06c-.782.571-1.837-.196-1.538-1.117l2.133-6.57-5.59-4.06c-.783-.57-.38-1.81.588-1.81h6.905l2.134-6.57z" />
  </svg>
);

export default RatingStars;
