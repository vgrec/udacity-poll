import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { setAuthUser } from "../actions/authedUser";

const Nav = ({ dispatch, authedUser }) => {
  const getNavLinkClass = (isActive) => {
    return isActive ? "nav-link active" : "nav-link";
  };

  const handleLogout = () => {
    dispatch(setAuthUser(null));
  };

  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => getNavLinkClass(isActive)}
              to="/leaderboard"
            >
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => getNavLinkClass(isActive)}
              to="/add"
            >
              New
            </NavLink>
          </li>
        </ul>

        <ul>
          <li>Logged in as: {authedUser}</li>
          <li>
            <Link onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(Nav);
