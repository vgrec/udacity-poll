import { formatDate } from "../_Utils";

const QuestionCard = ({ question, onQuestionClicked }) => {
  return (
    <div className="question-card">
      <strong style={{ fontSize: 14 }}>{question.author}</strong>
      <div
        style={{
          fontSize: 14,
          color: "#424242",
          marginTop: 6,
          marginBottom: 16,
        }}
      >
        {formatDate(question.timestamp)}
      </div>
      <button
        onClick={() => onQuestionClicked(question.id)}
        className="button"
        style={{ width: "100%" }}
      >
        View
      </button>
    </div>
  );
};

export default QuestionCard;
