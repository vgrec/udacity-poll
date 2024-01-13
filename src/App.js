import "./App.css";
import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";
import { _getUsers } from "./_DATA";
import NewPollPage from "./pages/NewPollPage";
import LeaderboardPage from "./pages/LeaderboardPage";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    _getUsers().then((users) => setUsers(users));
  }, []);

  console.log(users);

  const usersArray = () => Object.values(users);

  return users.length === 0 ? (
    <h4 style={{ padding: 8 }}>Loading...</h4>
  ) : (
    // <LoginPage users={Object.values(users)} />
    // <NewPollPage />
    <LeaderboardPage users={usersArray()} />
  );
}

export default App;
