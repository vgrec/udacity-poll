import { _getUsers, _getQuestions } from "../_DATA";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthUser } from "./authedUser";

export function handleInitialData(authedUser) {
  return (dispatch) => {
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(setAuthUser(authedUser));
        console.log("user authed", authedUser)
      }
    );
  };
}
