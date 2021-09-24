import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

const Navigation = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.isLoggedIn = false;
    history.replace("/");
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <NavLink
                  to="/home"
                  activeClassName="text-white bg-gray-900"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/meals"
                  activeClassName="text-white bg-gray-900"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Meals
                </NavLink>

                <NavLink
                  to="/contact"
                  activeClassName="text-white bg-gray-900"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div class="flex space-x-4">
              <NavLink
                to="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Cart
              </NavLink>

              {!authCtx.isLoggedIn && (
                <NavLink
                  to="/login"
                  activeClassName="text-white bg-gray-900"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </NavLink>
              )}
              {console.log(authCtx.isLoggedIn)}
              {authCtx.isLoggedIn && (
                <button
                  onClick={logoutHandler}
                  activeClassName="text-white bg-gray-900"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
