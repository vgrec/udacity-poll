const PollResultsPage = ({ question, authedUser }) => {
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
            <td>*</td>
            <td>2</td>
            <td>18%</td>
          </tr>
          <tr>
            <td>{question.optionTwo.text}</td>
            <td>-</td>
            <td>8</td>
            <td>72%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PollResultsPage;
