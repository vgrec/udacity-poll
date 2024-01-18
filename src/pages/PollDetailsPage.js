import { connect } from "react-redux";
import PollResultsPage from "./PollResultsPage";
import AnswerPollPage from "./AnswerPollPage";
import { useParams } from "react-router-dom";

const PollDetailsPage = ({ authedUser, questions }) => {
  const { question_id } = useParams();
  const question = questions[question_id];

  const isPollAnswered =
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);

  return (
    <div>
      {isPollAnswered ? (
        <PollResultsPage question={question} authedUser={authedUser} />
      ) : (
        <AnswerPollPage question={question} />
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }) => ({
  authedUser,
  questions,
});

export default connect(mapStateToProps)(PollDetailsPage);
