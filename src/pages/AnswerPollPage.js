const AnswerPollPage = ({ question, author }) => {
  console.log(question);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
        border: "1px solid black",
      }}
    >
      <h2>Poll by {question.author}</h2>
      <img src={author.avatarURL} alt="avatar" width="100" height="100" />
      <br />
      <h3>Would you rather?</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 8 }}>
          <input type="radio" id="option1" name="radioGroup" value="option1" />{" "}
          &nbsp;
          <label htmlFor="option1">{question.optionOne.text}</label>
        </div>
        <div>
          <input type="radio" id="option2" name="radioGroup" value="option2" />{" "}
          &nbsp;
          <label htmlFor="option2">{question.optionTwo.text}</label>
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

export default AnswerPollPage;
