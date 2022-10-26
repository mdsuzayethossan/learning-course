import React from "react";

const Blog = () => {
  return (
    <div className="container pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is `cors`?
          </div>
          <div className="collapse-content">
            <p>
              CORS is a node. js package for providing a Connect/Express
              middleware that can be used to enable CORS with various options.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          tabIndex={1}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How does react context api work?
          </div>
          <div className="collapse-content">
            <p>
              Indeed, Firebase is a less technical and time-saving alternative
              to writing full-fledged backend code for dynamic apps. You might
              also want to consider leveraging this tool if you eventually wish
              to host and manage your app in the cloud. Being serverless,
              Firebase removes the need to worry about the technicalities of
              cloud server configuration.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          tabIndex={3}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is the useRef hook?
          </div>
          <div className="collapse-content">
            <p>
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.
            </p>
            <p>
              useRef returns a mutable ref object whose .current property is
              initialized to the passed argument ( initialValue ). The returned
              object will persist for the full lifetime of the component.
              Essentially, useRef is like a “box” that can hold a mutable value
              in its .current property.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
