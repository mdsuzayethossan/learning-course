import { Declaration } from "postcss";
import React from "react";
import Details from "./Details";

const CourseCard = ({ course }) => {
  const { title, students, details, picture, fee } = course;
  return (
    <div className="card border-2 border-gray-200 w-full mb-10 bg-base-100 shadow-xl">
      <figure className="p-3">
        <img
          className="rounded border-2 h-[200px] border-gray-200 border-opacity-90"
          src={picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          {details.slice(0, 250) + "..."} <br />
        </p>
        <div className="card-actions justify-between">
          <div className="badge font-semibold">Students: {students}</div>
          <div className="badge font-semibold">${fee}</div>
        </div>
        <button className="btn btn-primary mt-5 text-white">Buy Course</button>
      </div>
    </div>
  );
};

export default CourseCard;
