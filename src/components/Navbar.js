import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import logo from "../assets/project-management.png";
const Navbar = () => {
  const { user, logOut, setTheme, theme } = useContext(AuthContext);
  const dark = () => {
    setTheme(!theme);
  };
  const handleSignout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <nav className="bg-base-200 border-b-2 z-50 shadow fixed w-full">
      <div className="container mx-auto">
        <div className="navbar justify-between">
          <div>
            <NavLink className="font-bold flex text-2xl text-primary" to="/">
              <img width={25} src={logo} alt="" />{" "}
              <span className="ml-2">E-skills</span>
            </NavLink>
          </div>
          <div>
            <ul className="hidden lg:flex gap-14">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary font-bold" : "font-semibold"
                  }
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary font-bold" : "font-semibold"
                  }
                  to="/courses"
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary font-bold" : "font-semibold"
                  }
                  to="/faq"
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary font-bold" : "font-semibold"
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex-none">
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">8</span>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="font-bold text-lg">8 Items</span>
                      <span className="text-info">Subtotal: $999</span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="tooltip hover:tooltip-open tooltip-bottom btn btn-ghost btn-circle avatar w-10 rounded-full"
                    data-tip={user?.displayName ? user.displayName : ""}
                  >
                    <div className="w-10 rounded-full">
                      <Link>
                        {user?.photoURL ? (
                          <img src={user.photoURL} alt="" />
                        ) : (
                          ""
                        )}
                      </Link>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu hidden lg:block menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <button onClick={handleSignout}>Logout</button>
                    </li>
                  </ul>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact lg:hidden dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-primary font-bold" : "font-semibold"
                        }
                        to="/home"
                      >
                        Home
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-primary font-bold" : "font-semibold"
                        }
                        to="/courses"
                      >
                        Courses
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-primary font-bold" : "font-semibold"
                        }
                        to="/blog"
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-primary font-bold" : "font-semibold"
                        }
                        to="/faq"
                      >
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <button onClick={handleSignout}>Logout</button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <ul className="flex gap-5">
                  <li className="mr-3">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-primary font-bold" : "font-semibold"
                      }
                      to="/login"
                    >
                      Log In
                    </NavLink>
                  </li>
                  <li className="lg:hidden">
                    <label htmlFor="my-drawer-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    </label>
                  </li>
                </ul>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar w-10 rounded-full"
                  >
                    <div className="w-10 rounded-full">
                      <Link>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu hidden lg:block menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <button onClick={handleSignout}>Logout</button>
                    </li>
                  </ul>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact lg:hidden dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-primary font-bold" : "font-semibold"
                        }
                        to="/home"
                      >
                        Home
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-primary font-bold" : "font-semibold"
                        }
                        to="/courses"
                      >
                        Courses
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-primary font-bold" : "font-semibold"
                        }
                        to="/blog"
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-primary font-bold" : "font-semibold"
                        }
                        to="/faq"
                      >
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <button onClick={handleSignout}>Logout</button>
                    </li>
                  </ul>
                </div>
              </>
            )}
            <ul className="flex items-center">
              <li className="flex items-center ml-3">
                <input type="checkbox" onClick={dark} className="toggle" />
              </li>
              <li className="flex items-center ml-3">
                {theme ? "Dark" : "Light"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
