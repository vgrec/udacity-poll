import LeaderboardTable from "../components/LeaderboardTable";
import { connect } from "react-redux";

const LeaderboardPage = ({ users }) => {
  const sortedUsers = users.sort(
    (a, b) =>
      Object.keys(b.answers).length +
      b.questions.length -
      (Object.keys(a.answers).length + a.questions.length)
  );

  return <LeaderboardTable users={sortedUsers} />;
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users),
});

export default connect(mapStateToProps)(LeaderboardPage);
