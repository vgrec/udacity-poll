import { render } from "@testing-library/react";
import LeaderboardTable from "./components/LeaderboardTable";

describe("LeaderboardTable", () => {
  it("matches the snapshot when user is logged in", () => {
    const view = render(
      <LeaderboardTable
        users={[
          {
            id: "sarahedo",
            password: "password123",
            name: "Sarah Edo",
            avatarURL:
              "https://cdn3.vectorstock.com/i/thumbs/67/37/people-face-icons-29-vector-14866737.jpg",
            answers: {
              "8xf0y6ziyjabvozdd253nd": "optionOne",
              "6ni6ok3ym7mf1p33lnez": "optionOne",
              am8ehyc8byjqgar0jgpub9: "optionTwo",
              loxhs1bqm25b708cmbf3g: "optionTwo",
            },
            questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
          },
          {
            id: "tylermcginnis",
            password: "abc321",
            name: "Tyler McGinnis",
            avatarURL:
              "https://cdn3.vectorstock.com/i/thumbs/67/02/people-face-icons-22-vector-14866702.jpg",
            answers: {
              vthrdm985a262al8qx3do: "optionOne",
              xj352vofupe1dqz9emx13r: "optionTwo",
            },
            questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
          },
        ]}
      />
    );
    
    expect(view).toMatchSnapshot();
  });
});
