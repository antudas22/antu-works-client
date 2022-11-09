import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Reviews = ({details}) => {
    const {user} = useContext(AuthContext);
    const {_id, name} = details;

    const handleSubmitReview = e => {
        e.preventDefault();
        const form = e.target;
        const reviewerName = user?.displayName || form.name.value;
        const photoURL = user?.photoURL || form.photoURL.value;
        const text = form.text.value;

        const review = {
            id: _id,
            name: name,
            reviewer: reviewerName,
            photoURL,
            text
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Review Submitted')
                form.reset();
            }
        })
        .catch(error => console.error(error));
    }


  return (
    <div className="mb-16">
      <div className="">
        <form onSubmit={handleSubmitReview}>
            <h2 className="text-center text-2xl font-bold mb-10">Put your Feedback for {name} Service</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            defaultValue={user?.displayName}
            className="input input-bordered input-success w-full max-w-xs mr-2"
          />
          <input
            type="text"
            name="photoURL"
            placeholder="Image URL"
            className="input input-bordered input-success w-full max-w-xs mr-2"
            defaultValue={user?.photoURL}
          />
          <input
            type="text"
            name="text"
            placeholder="Comment Here..."
            className="input input-bordered input-success w-full max-w-xs mr-2"
            required
          />
          <input className="btn btn-success" type="submit" value="Put Your Review" />
        </form>
      </div>
    </div>
  );
};

export default Reviews;
