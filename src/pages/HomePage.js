const HomePage = ({ questions, authedUser }) => {
  const newQuestions = questions.filter((question) => {
    return (
      !question.optionOne.votes.includes(authedUser) &&
      !question.optionTwo.votes.includes(authedUser)
    );
  });

  const answeredQuestions = questions.filter((question) => {
    return (
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
    );
  });

  console.log("newQuestions", newQuestions);
  console.log("answeredQuestions", answeredQuestions);

  return <div>Home Page</div>;
};

export default HomePage;
