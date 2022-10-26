import React from "react";

const CourseCard = ({ course }) => {
  const { title } = course;
  return (
    <div className="card border-2 border-gray-200 w-full mb-10 bg-base-100 shadow-xl">
      <figure className="p-3">
        <img
          className="rounded"
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <button className="btn btn-primary mt-5 text-white">Buy Course</button>
      </div>
    </div>
  );
};

export default CourseCard;
