import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import logo from "/logo.png";
import useAxios from "./../hooks/useAxios";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const axiosFetch = useAxios();

  const handleSignOut = async () => {
    try {
      const { user } = await signOutUser();
      console.log(user);
      console.log("Signed Out");
      const { data } = await axiosFetch.post("/logout", { user });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="z-[200] mt-4">
      <Link
        to={"/"}
        className="flex md:hidden btn btn-ghost text-3xl font-bold"
      >
        <img className="w-10 h-10 rounded-full" src={logo} alt="logo" />
        Foodie<span className="text-[#ED4C67]">Fiesta</span>
      </Link>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost 2xl:hidden"
            >
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="space-y-2 dropdown-content z-[10] p-3 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#ED4C67] text-white px-3 py-2 rounded-lg w-full inline-block"
                      : "hover:bg-[#ED4C67] hover:text-white px-3 py-2 rounded-lg w-full inline-block"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/all-foods"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#ED4C67] text-white px-3 py-2 rounded-lg w-full inline-block"
                      : "hover:bg-[#ED4C67] hover:text-white px-3 py-2 rounded-lg w-full inline-block"
                  }
                >
                  Available Foods
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/add-food"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#ED4C67] text-white px-3 py-2 rounded-lg w-full inline-block"
                      : "hover:bg-[#ED4C67] hover:text-white px-3 py-2 rounded-lg w-full inline-block"
                  }
                >
                  Add Food
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/manage-my-foods"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#ED4C67] text-white px-3 py-2 rounded-lg w-full inline-block"
                      : "hover:bg-[#ED4C67] hover:text-white px-3 py-2 rounded-lg w-full inline-block"
                  }
                >
                  Manane My Foods
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/my-food-req"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#ED4C67] text-white px-3 py-2 rounded-lg w-full inline-block"
                      : "hover:bg-[#ED4C67] hover:text-white px-3 py-2 rounded-lg w-full inline-block"
                  }
                >
                  My Food Request
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to={"/"}
            className="hidden md:flex btn btn-ghost text-3xl font-bold"
          >
            <img className="w-10 h-10 rounded-full" src={logo} alt="logo" />
            Foodie<span className="text-[#ED4C67]">Fiesta</span>
          </Link>
        </div>
        <div className="navbar-center mx-auto hidden 2xl:flex">
          <ul className="flex px-1 gap-2">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#ED4C67] text-white px-3 py-2 rounded-lg"
                    : "hover:bg-[#ED4C67] hover:text-white px-3 py-2 rounded-lg"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/all-foods"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#ED4C67] text-white px-3 py-2 rounded-lg"
                    : "hover:bg-[#ED4C67] hover:text-white px-3 py-2 rounded-lg"
                }
              >
                Available Foods
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/add-food"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#ED4C67] text-white px-3 py-2 rounded-lg"
                    : "hover:bg-[#ED4C67] hover:text-white px-3 py-2 rounded-lg"
                }
              >
                Add Food
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/manage-my-foods"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#ED4C67] text-white px-3 py-2 rounded-lg"
                    : "hover:bg-[#ED4C67] hover:text-white px-3 py-2 rounded-lg"
                }
              >
                Manage My Foods
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/my-food-req"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#ED4C67] text-white px-3 py-2 rounded-lg"
                    : "hover:bg-[#ED4C67] hover:text-white px-3 py-2 rounded-lg"
                }
              >
                My Food Request
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-4">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  src={user.photoURL}
                  alt=""
                  className="w-10 h-10 rounded-full "
                />
              </div>
              <button
                onClick={handleSignOut}
                className="btn bg-[#ED4C67] text-white hover:bg-[#B53471]"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn bg-[#ED4C67] text-white hover:bg-[#B53471]"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
