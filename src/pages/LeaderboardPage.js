import LeaderboardTable from "../components/LeaderboardTable";

const LeaderboardPage = ({ users }) => {
  const sortedUsers = users.sort(
    (a, b) =>
      Object.keys(b.answers).length +
      b.questions.length -
      (Object.keys(a.answers).length + a.questions.length)
  );

  return <LeaderboardTable users={sortedUsers} />;
};

export default LeaderboardPage;
