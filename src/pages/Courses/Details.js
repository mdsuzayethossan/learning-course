import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Details = () => {
  const singleDetails = useLoaderData();
  const { title, details, picture, id } = singleDetails;
  return (
    <div
      ref={ref}
      className="pt-24 max-w-lg mx-auto text-center d-flex justify-center"
    >
      <div className="card w-full text-center bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions">
            <Pdf targetRef={ref} filename="course-details.pdf">
              {({ toPdf }) => (
                <button className="btn btn-primary text-white" onClick={toPdf}>
                  Download
                </button>
              )}
            </Pdf>
            <Link to={`/checkout/${id}`} className="btn text-white btn-primary">
              Get premium access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
