const AnswerPollPage = ({ question }) => {
  const isOptionOneSelected = question.optionOne.votes.includes(question.author);
  const isOptionTwoSelected = question.optionTwo.votes.includes(question.author);

  const isFormEnabled = !isOptionOneSelected && !isOptionTwoSelected;

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedQuestion = e.target.radioGroup.value;
    if (!selectedQuestion) {
      alert("Please select an option");
      return;
    }

    console.log("submitted", selectedQuestion);
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
      <img src={question.author.avatarURL} alt="avatar" width="100" height="100" />
      <br />
      <h3>Would you rather?</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 8 }}>
          <input
            defaultChecked={isOptionOneSelected}
            disabled={!isFormEnabled}
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
            disabled={!isFormEnabled}
            defaultChecked={isOptionTwoSelected}
            type="radio"
            id="optionTwo"
            name="radioGroup"
            value="optionTwo"
          />{" "}
          &nbsp;
          <label htmlFor="optionTwo">{question.optionTwo.text}</label>
        </div>
        <div className="container-center">
          <button
            disabled={!isFormEnabled}
            className="button"
            style={{ width: 100, margin: 24 }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnswerPollPage;
