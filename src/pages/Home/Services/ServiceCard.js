import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {name, price, img, rating, description} = service;
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
                <p className="text-lg font-bold text-sky-500">Price: ${price}</p>
                <p className="text-yellow-400 font-semibold">Rating: {rating}</p>
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
            <Link><button className="btn btn-success w-80">Details</button></Link>
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
