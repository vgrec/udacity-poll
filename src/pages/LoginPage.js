import { useState } from "react";
import DropdownMenu from "../components/DropdownMenu";
import appLogo from "../images/app_logo.png";

const LoginPage = ({ users }) => {
  const [username, setUsername] = useState(users[0].id);
  const [password, setPassword] = useState(users[0].password);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("loggin with: ", username, password);
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
      <form onSubmit={handleSubmit}>
        <h2>Employee Polls</h2>

        <img src={appLogo} alt="App Logo" width="250px" height="250px" />

        <strong style={{ marginTop: 16 }}>Choose a test user to login</strong>
        <DropdownMenu users={users} onOptionSelected={onOptionsSelected} />
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
