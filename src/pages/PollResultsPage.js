const PollResultsPage = ({ question, authedUser }) => {
  const userHasVotedForOptionOne =
    question.optionOne.votes.includes(authedUser);
  const userHasVotedForOptionTwo =
    question.optionTwo.votes.includes(authedUser);

  const numberOfVotesForOptionOne = question.optionOne.votes.length;
  const numberOfVotesForOptionTwo = question.optionTwo.votes.length;

  const percentageForOptionOne = Math.round(
    (numberOfVotesForOptionOne /
      (numberOfVotesForOptionOne + numberOfVotesForOptionTwo)) *
      100
  );
  const percentageForOptionTwo = Math.round(
    (numberOfVotesForOptionTwo /
      (numberOfVotesForOptionOne + numberOfVotesForOptionTwo)) *
      100
  );

  return (
    <div className="container-center-vertical">
      <h2> Poll Results</h2>

      <table className="leaderboard">
        <thead>
          <tr>
            <th>Question</th>
            <th>Your choice</th>
            <th>Number of Votes</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{question.optionOne.text}</td>
            <td className="center-text">
              {userHasVotedForOptionOne && <p>&#9745;</p>}
            </td>
            <td className="center-text">{numberOfVotesForOptionOne}</td>
            <td className="center-text">{percentageForOptionOne}%</td>
          </tr>
          <tr>
            <td>{question.optionTwo.text}</td>
            <td className="center-text">
              {userHasVotedForOptionTwo && <p>&#9745;</p>}
            </td>
            <td className="center-text">{numberOfVotesForOptionTwo}</td>
            <td className="center-text">{percentageForOptionTwo}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PollResultsPage;
