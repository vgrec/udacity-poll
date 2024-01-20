import { render, screen } from "@testing-library/react";
import Nav from "../components/Nav";
import { BrowserRouter } from "react-router-dom";
import * as React from "react";
import { Provider } from "react-redux";

import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";

describe("Nav", () => {
  it("will display all the links", () => {
    const store = createStore(reducer, middleware);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );

    const homeLink = screen.getByText("Home");
    const leaderboardLink = screen.getByText("Leaderboard");
    const newLink = screen.getByText("New");
    const logoutLink = screen.getByText("Logout");

    expect(homeLink).toBeInTheDocument();
    expect(leaderboardLink).toBeInTheDocument();
    expect(newLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
  });
});
