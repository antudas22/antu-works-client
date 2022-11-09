import React, { useEffect, useState } from 'react';
import ReviewItemRow from './ReviewItemRow';

const ReviewItems = ({details}) => {
    const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
    <tbody>
        {
            reviews.map(review => <ReviewItemRow
                key={review._id}
                review={review}
            >

            </ReviewItemRow>)
        }
    </tbody>
    
  </table>
  </div>
    );
};

export default ReviewItems;