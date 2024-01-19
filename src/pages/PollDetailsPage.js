import { connect } from "react-redux";
import PollResultsPage from "./PollResultsPage";
import AnswerPollPage from "./AnswerPollPage";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

const PollDetailsPage = ({ authedUser, questions, users }) => {
  const { question_id } = useParams();
  const question = questions[question_id];

  if (!question) {
    return <NotFoundPage />;
  }

  const isPollAnswered =
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);

  return (
    <div>
      {isPollAnswered ? (
        <PollResultsPage question={question} authedUser={authedUser} />
      ) : (
        <AnswerPollPage
          question={question}
          authorAvatarURL={users[question.author].avatarURL}
        />
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions,
  users,
});

export default connect(mapStateToProps)(PollDetailsPage);
