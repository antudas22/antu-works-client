import React from 'react';
import ReviewItems from '../ReviewItem/ReviewItems';

const MyReviews = () => {
    return (
        <div>
            <div className="text-center mb-6">
        <h3 className="inline-block text-2xl font-bold text-muted border-b-4 border-sky-500">
          My Reviews
        </h3>
      </div>
      <ReviewItems />
        </div>
    );
};

export default MyReviews;