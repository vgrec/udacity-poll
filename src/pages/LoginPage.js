import { useEffect, useState } from "react";
import UsersDropdownMenu from "../components/UsersDropdownMenu";
import appLogo from "../images/app_logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { _getUsers } from "../_DATA";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

// Load initial data after successful login in the App.js

const LoginPage = (props) => {
  const [users, setUsers] = useState([]);

  // Fetch test users to be displayed in
  // a dropdown menu for testing purposes.
  useEffect(() => {
    _getUsers().then((users) => {
      const usersArray = Object.values(users);
      setUsers(Object.values(usersArray));

      if (usersArray.length > 0) {
        setUsername(usersArray[0].id);
        setPassword(usersArray[0].password);
      }
    });
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const isLogginButtonDisabled =
    isLoggingIn || username === "" || password === "";

  const navigate = useNavigate();
  const location = useLocation();
  const redirectPage = location.state?.from?.pathname || "/";

  const findUserById = (userId) => {
    return users.find((user) => user.id === userId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoggingIn(true);

    const user = findUserById(username);
    if (user && user.password === password) {
      await props.dispatch(handleInitialData(username));

      console.log("Redirecting to", redirectPage);
      navigate(redirectPage);
    } else {
      alert("Invalid password");
    }
    setIsLoggingIn(false);
  };

  const onOptionsSelected = (userId) => {
    const user = users.find((user) => user.id === userId);
    setUsername(user.id);
    setPassword(user.password);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form className="container-form" onSubmit={handleSubmit}>
        <h2>Employee Polls</h2>

        <img src={appLogo} alt="App Logo" width="250px" height="250px" />

        {users.length === 0 ? (
          <h4>Loading test users...</h4>
        ) : (
          <div className="container-center-vertical">
            <strong style={{ marginTop: 16 }}>
              Choose a test user to login
            </strong>
            <br />
            <UsersDropdownMenu
              users={users}
              onOptionSelected={onOptionsSelected}
            />
          </div>
        )}

        <br />
        <input
          data-testid="username"
          type="text"
          onChange={handleUsernameChange}
          placeholder="Username"
          value={username}
        />
        <input
          data-testid="password"
          onChange={handlePasswordChange}
          type="password"
          placeholder="Password"
          value={password}
        />
        <button data-testid="submit" disabled={isLogginButtonDisabled}>
          {isLoggingIn ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default connect()(LoginPage);
