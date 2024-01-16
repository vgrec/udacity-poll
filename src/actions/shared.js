import { _getUsers, _getQuestions } from "../_DATA";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthUser } from "./authedUser";

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
      }
    );
  };
}

export function handleUserLogin(userId, password) {
  return (dispatch) => {
    return Promise.all([_getUsers()]).then(([users]) => {
      if (users[userId].password === password) {
        dispatch(setAuthUser(userId));
      } else {
        alert("Invalid password");
      }
    });
  };
}
