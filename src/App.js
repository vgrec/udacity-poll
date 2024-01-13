import "./App.css";
import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";
import { _getUsers, _getQuestions } from "./_DATA";
import NewPollPage from "./pages/NewPollPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import AnswerPollPage from "./pages/AnswerPollPage";
import HomePage from "./pages/HomePage";

function App() {
  const [users, setUsers] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    _getUsers().then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    _getQuestions().then((questions) => setQuestions(questions));
  }, []);

  console.log(users);

  const usersArray = () => Object.values(users);
  const questionsArray = () => Object.values(questions);

  const selectedQuestion = questionsArray()[0];
  const author = usersArray().find(
    (user) => user.id === selectedQuestion.author
  );

  const authedUser = "sarahedo";

  return users.length === 0 ? (
    <h4 style={{ padding: 8 }}>Loading...</h4>
  ) : (
    // <LoginPage users={Object.values(users)} />
    // <NewPollPage />
    // <LeaderboardPage users={usersArray()} />
    // <AnswerPollPage question={selectedQuestion} author={author} />
    <HomePage questions={questionsArray()} authedUser={authedUser} />
  );
}

export default App;
