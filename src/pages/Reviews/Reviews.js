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
        const text = form.text.defaultValue;

        const review = {
            id: _id,
            name: name,
            reviewer: reviewerName,
            photoURL,
            text
        }
    }


  return (
    <div className="mb-16">
      <div className="text-center mb-6">
        <h3 className="inline-block text-2xl font-bold text-muted border-b-4 border-sky-500">
          Reviews
        </h3>
      </div>
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
