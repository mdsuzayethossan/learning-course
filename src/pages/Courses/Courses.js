import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

const Courses = () => {
  const courses = useLoaderData();
  const [categories, setCategories] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/skill-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="drawer h-auto drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mx-5 mt-32 grid lg:grid-cols-3 gap-7">
        {courses?.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
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
          {categories?.map((category) => (
            <li key={category.id}>
              <Link to={`/skill-category/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Courses;
