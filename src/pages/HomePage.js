import { connect } from "react-redux";
import QuestionCard from "../components/QuestionCard";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";

const HomePage = ({ dispatch, questions, authedUser }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

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

  const handleQuestionClicked = (questionId) => {
    console.log("question clicked", questionId);
  };

  return questions.length === 0 ? (
    <h4 className="center-text">Loading...</h4>
  ) : (
    <div style={{ width: "70%", margin: "auto" }}>
      <p>Logged in as: {authedUser}</p>
      <h2>New Questions</h2>
      <div className="questions-container">
        {newQuestions.map((question) => {
          return (
            <QuestionCard
              key={question.id}
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
              key={question.id}
              question={question}
              onQuestionClicked={(id) => handleQuestionClicked(id)}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }) => ({
  authedUser,
  questions: Object.values(questions),
});

export default connect(mapStateToProps)(HomePage);
