import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Nav = ({ authedUser, authedUserAvatarURL }) => {
  const getNavLinkClass = (isActive) => {
    return isActive ? "nav-link active" : "nav-link";
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
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  authedUserAvatarURL: users[authedUser].avatarURL,
});

export default connect(mapStateToProps)(Nav);
