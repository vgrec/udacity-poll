import React, { useState } from "react";

const NewPollPage = () => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("optionOne: ", optionOne);
    console.log("optionTwo: ", optionTwo);
  };

  return (
    <div>
      <p className="center-text">Create new poll</p>
      <div className="poll-container">
        <h2 className="center-text">Would you rather?</h2>
        <form onSubmit={handleSubmit}>
          <strong>First option</strong>
          <input
            onChange={(e) => setOptionOne(e.target.value)}
            value={optionOne}
            type="text"
            placeholder="First option"
          />

          <strong>Second option</strong>
          <input
            onChange={(e) => setOptionTwo(e.target.value)}
            value={optionTwo}
            type="text"
            placeholder="Second option"
          />
          <button>Create Poll</button>
        </form>
      </div>
    </div>
  );
};

export default NewPollPage;
