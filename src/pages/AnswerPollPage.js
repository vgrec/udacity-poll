import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions";

const AnswerPollPage = ({ dispatch, question, authorAvatarURL }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedQuestion = e.target.radioGroup.value;
    if (!selectedQuestion) {
      alert("Please select an option");
      return;
    }

    dispatch(handleSaveQuestionAnswer(question.id, selectedQuestion));
  };

  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
      }}
    >
      <h2>Poll by {question.author}</h2>
      <img
        src={authorAvatarURL}
        alt="avatar"
        width="100"
        height="100"
      />
      <br />
      <h3>Would you rather?</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 8 }}>
          <input
            type="radio"
            id="optionOne"
            name="radioGroup"
            value="optionOne"
          />{" "}
          &nbsp;
          <label htmlFor="optionOne">{question.optionOne.text}</label>
        </div>
        <div>
          <input
            type="radio"
            id="optionTwo"
            name="radioGroup"
            value="optionTwo"
          />{" "}
          &nbsp;
          <label htmlFor="optionTwo">{question.optionTwo.text}</label>
        </div>
        <div className="container-center">
          <button className="button" style={{ width: 100, margin: 24 }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect()(AnswerPollPage);
