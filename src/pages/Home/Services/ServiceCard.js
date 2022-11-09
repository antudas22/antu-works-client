import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {_id, name, price, img, rating, description} = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="">
            <div className="flex justify-between mb-4">
                <p className="text-lg font-bold ">Price: <span className="text-lg font-bold text-sky-500">${price}</span></p>
                <div className="flex items-center"><p className="mr-2 text-lg font-bold">Rating:</p> <span className="flex items-center text-lg font-bold text-yellow-400 gap-1">
                <FaStar />{rating}    
                </span></div>
            </div>
            <div className="h-32">
                {
                    description.length > 100 ?
                    <>{description.slice(0, 250) + '...'}</>
                    :
                    description
                }
            </div>
            <div className="flex justify-center mt-4">
            <Link to={`/service/${_id}`}><button className="btn btn-success w-80">Details</button></Link>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
