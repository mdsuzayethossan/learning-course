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
            Why are you using `firebase`? What other options do you have to
            implement authentication?
          </div>
          <div className="collapse-content">
            <p>
              Indeed, Firebase is a less technical and time-saving alternative
              to writing full-fledged backend code for dynamic apps. You might
              also want to consider leveraging this tool if you eventually wish
              to host and manage your app in the cloud. Being serverless,
              Firebase removes the need to worry about the technicalities of
              cloud server configuration.other options to implement
              authentication Auth0, STYTCH, Ory, Supabase, Okta, PingIdentity,
              Keycloak, Frontegg, Authress,
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
            How does the private route work?
          </div>
          <div className="collapse-content">
            <p>
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
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
            What is Node? How does Node work?
          </div>
          <div className="collapse-content">
            <p>
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
