import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const singleDetails = useLoaderData();
  const { title, students, details, picture } = singleDetails;
  return (
    <div className="pt-24 max-w-lg text-center d-flex justify-center">
      <div className="card w-full text-center bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Get premium access</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
