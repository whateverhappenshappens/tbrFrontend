import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5, size = 'sm' }) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: maxRating }, (_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= Math.floor(rating);
        const isPartial = starValue === Math.ceil(rating) && rating % 1 !== 0;
        
        return (
          <Star
            key={index}
            className={`${sizeClasses[size]} ${
              isFilled ? 'fill-yellow-400 text-yellow-400' : 
              isPartial ? 'fill-yellow-200 text-yellow-400' : 'text-gray-300'
            }`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;