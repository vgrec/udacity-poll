import { _saveQuestion } from "../_DATA";
import { _saveQuestionAnswer } from "../_DATA";

describe("_saveQuestion success", () => {
  it("will return the new question", async () => {
    const expected = {
      optionOneText: "optionOneText",
      optionTwoText: "optionTwoText",
      author: "author",
    };
    const received = await _saveQuestion(expected);

    expect(expected.optionOneText).toEqual(received.optionOne.text);
    expect(expected.optionTwoText).toEqual(received.optionTwo.text);
    expect(expected.author).toEqual(received.author);

    expect([]).toEqual(received.optionOne.votes);
    expect([]).toEqual(received.optionTwo.votes);
    expect(received.id).toBeDefined();
    expect(received.timestamp).toBeDefined();
  });
});

describe("_saveQuestion error", () => {
  it("will return error", async () => {
    const expected = "Please provide optionOneText, optionTwoText, and author";

    await expect(_saveQuestion({})).rejects.toEqual(expected);
  });
});

describe("_saveQuestionAnswer success", () => {
  it("will return true", async () => {
    await expect(
      _saveQuestionAnswer({
        authedUser: "sarahedo",
        qid: "6ni6ok3ym7mf1p33lnez",
        answer: "optionOne",
      })
    ).resolves.toEqual(true);
  });
});

describe("_saveQuestionAnswer error", () => {
  it("will return error", async () => {
    const expected = "Please provide authedUser, qid, and answer";

    await expect(_saveQuestionAnswer({})).rejects.toEqual(expected);
  });
});
