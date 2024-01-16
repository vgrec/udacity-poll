import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";
import { _getUsers, _getQuestions } from "./_DATA";
import NewPollPage from "./pages/NewPollPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import AnswerPollPage from "./pages/AnswerPollPage";
import HomePage from "./pages/HomePage";
import ViewPollPage from "./pages/PollResultsPage";
import PollResultsPage from "./pages/PollResultsPage";
import { Route, Routes } from "react-router-dom";
import PollDetailsPage from "./pages/PollDetailsPage";

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
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <HomePage questions={questionsArray()} authedUser={authedUser} />
        }
      />
      <Route path="/add" element={<NewPollPage />} />
      <Route
        path="/leaderboard"
        element={<LeaderboardPage users={usersArray()} />}
      />
      <Route
        path="/questions/:question_id"
        element={<PollDetailsPage id={2} />}
      />
    </Routes>

    // <LoginPage users={Object.values(users)} />
    // <NewPollPage />
    // <LeaderboardPage users={usersArray()} />
    // <AnswerPollPage question={selectedQuestion} author={author} />
    // <HomePage questions={questionsArray()} authedUser={authedUser} />
    // <PollResultsPage question={selectedQuestion} authedUser={authedUser} />
  );
}

export default App;
