import { useState } from "react";
import DropdownMenu from "../components/DropdownMenu";
import appLogo from "../images/app_logo.png";

const LoginPage = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  console.log("users", users);
  console.log("selected", selectedUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit");
  };

  const onOptionsSelected = (userId) => {
    const user = users.find((user) => user.id === userId);
    setSelectedUser(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Employee Polls</h2>

        <img
          src={appLogo}
          alt="App Logo"
          width="250px"
          height="250px"
        />

        <strong style={{marginTop: 16}}>Choose a test user to login</strong>
        <DropdownMenu users={users} onOptionSelected={onOptionsSelected} />
        <br />
        <input type="text" placeholder="Username" value={selectedUser.id} />
        <input
          type="password"
          placeholder="Password"
          value={selectedUser.password}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
