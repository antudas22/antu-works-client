import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { name, price, img, rating, description } = useLoaderData();
  return (
    <div>
      <div className="text-center mb-14">
        <h3 className="inline-block text-2xl font-bold text-muted border-b-4 border-sky-500">
          Service Details
        </h3>
      </div>
      <div className="card bg-base-100 drop-shadow-2xl mb-10">
  <div className="card-body">
    <h2 className="card-title font-bold mb-2">Service Name: <span className="font-semibold">{name}</span></h2>
    <div className="mb-4">
    <p className="text-lg font-bold">Price: <span className="text-lg font-bold text-sky-500">${price}</span></p>
    <div className="flex items-center">
    <div className="text-lg font-bold inline mr-2">Rating: </div> 
    <div className="flex gap-1 text-lg font-bold text-yellow-400 items-center">
    <FaStar /> {rating}
    </div>
    </div>
    </div>
    <p className="text-lg font-bold">Description:</p>
    <p>{description}</p>
  </div>
</div>
    </div>
  );
};

export default ServiceDetails;
