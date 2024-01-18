import { _saveQuestionAnswer } from "../_DATA";
import { saveUserAnswer } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function saveQuestionAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleSaveQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
      .then(() => {
        dispatch(saveUserAnswer(authedUser, qid, answer));
        dispatch(saveQuestionAnswer(authedUser, qid, answer));
      })
      .catch((e) => {
        console.warn("saveQuestionAnswerFailed: ", e);
        alert("Error saving answer. Try again.");
      });
  };
}
