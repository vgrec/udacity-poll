import { connect } from "react-redux";
import QuestionCard from "../components/QuestionCard";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";

const HomePage = (props) => {
  console.log("HomePage props", props);

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  const newQuestions = props.questions.filter((question) => {
    return (
      !question.optionOne.votes.includes(props.authedUser) &&
      !question.optionTwo.votes.includes(props.authedUser)
    );
  });

  const answeredQuestions = props.questions.filter((question) => {
    return (
      question.optionOne.votes.includes(props.authedUser) ||
      question.optionTwo.votes.includes(props.authedUser)
    );
  });

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

const mapStateToProps = ({ authedUser, questions }) => ({
  authedUser,
  questions: Object.values(questions),
});

export default connect(mapStateToProps)(HomePage);
