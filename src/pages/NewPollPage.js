import React, { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const NewPollPage = ({ dispatch }) => {
  const navigate = useNavigate();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    dispatch(
      handleAddQuestion(
        optionOne,
        optionTwo,
        () => {
          setIsSubmitting(false);
          navigate("/");
        },
        () => {
          setIsSubmitting(false);
        }
      )
    );
  };

  return (
    <div>
      <div className="poll-container">
        <h2 className="center-text">Would you rather?</h2>
        <form className="container-form" onSubmit={handleSubmit}>
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
          <button disabled={isSubmitting}>Create Poll</button>
        </form>
      </div>
    </div>
  );
};

export default connect()(NewPollPage);
