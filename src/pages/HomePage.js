import QuestionCard from "../components/QuestionCard";

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

  const handleQuestionClicked = (questionId) => {
    console.log("question clicked", questionId);
  };

  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <h2>New Questions</h2>
      <div className="questions-container">
        {newQuestions.map((question) => {
          return (
            <QuestionCard
              question={question}
              onQuestionClicked={(id) => handleQuestionClicked(id)}
            />
          );
        })}
      </div>
      <br />
      <h2>Answered Questions</h2>
      <div className="questions-container">
        {answeredQuestions.map((question) => {
          return (
            <QuestionCard
              question={question}
              onQuestionClicked={(id) => handleQuestionClicked(id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
