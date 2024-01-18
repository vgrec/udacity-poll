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
import PrivateRoute from "./components/PrivateRoute";
import Nav from "./components/Nav";
import { connect } from "react-redux";

function App({ authedUser }) {
  console.log("App.js - App reloaded");

  // const [users, setUsers] = useState([]);
  // const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //   _getUsers().then((users) => setUsers(users));
  // }, []);

  // useEffect(() => {
  //   _getQuestions().then((questions) => setQuestions(questions));
  // }, []);

  // console.log(users);

  // const usersArray = () => Object.values(users);
  // const questionsArray = () => Object.values(questions);

  // const selectedQuestion = questionsArray()[0];
  // const author = usersArray().find(
  //   (user) => user.id === selectedQuestion.author
  // );

  // const authedUser = "sarahedo";

  return (
    <div>
      {authedUser && <Nav />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <NewPollPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <PrivateRoute>
              <LeaderboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/questions/:question_id"
          element={
            <PrivateRoute>
              <PollDetailsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);
