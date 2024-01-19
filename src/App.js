import LoginPage from "./pages/LoginPage";
import NewPollPage from "./pages/NewPollPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import PollDetailsPage from "./pages/PollDetailsPage";
import PrivateRoute from "./components/PrivateRoute";
import Nav from "./components/Nav";
import { connect } from "react-redux";
import NotFoundPage from "./pages/NotFoundPage";

function App({ authedUser }) {
  console.log("App.js - App reloaded");

  return (
    <div>
      {authedUser && <Nav />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="*"
          element={
            <PrivateRoute>
              <NotFoundPage />
            </PrivateRoute>
          }
        />

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
