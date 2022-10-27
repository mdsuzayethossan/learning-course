import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import CourseCard from "./CourseCard";

const Courses = () => {
  const courses = useLoaderData();
  const { theme, setTheme } = useContext(AuthContext);
  return (
    <div className={`drawer h-auto ${theme ? "bg-black" : ""} drawer-mobile`}>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mx-5 mt-32 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {courses?.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side mt-14">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {courses?.map((course) => (
            <li key={course.id}>
              <Link to={`/course/${course.id}`}>{course.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Courses;
