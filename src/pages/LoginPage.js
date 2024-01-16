import { useEffect, useState } from "react";
import UsersDropdownMenu from "../components/UsersDropdownMenu";
import appLogo from "../images/app_logo.png";
import { useNavigate } from "react-router-dom";
import { _getUsers } from "../_DATA";

const LoginPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    _getUsers().then((users) => {
      const usersArray = Object.values(users);
      setUsers(Object.values(usersArray));
      setUsername(usersArray[0].id);
      setPassword(usersArray[0].password);
    });
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("loggin with: ", username, password);
    navigate("/");
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
          type="text"
          onChange={handleUsernameChange}
          placeholder="Username"
          value={username}
        />
        <input
          onChange={handlePasswordChange}
          type="password"
          placeholder="Password"
          value={password}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
