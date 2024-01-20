import { render, fireEvent, screen } from "@testing-library/react";
import LoginPage from "../pages/LoginPage";
import * as React from "react";
import { Provider } from "react-redux";

import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer, middleware);

describe("LoginPage", () => {
  it("will disable the login button when username is empty", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );

    const usernameInput = screen.getByTestId("username");
    const passwordInput = screen.getByTestId("password");
    const submitButton = screen.getByTestId("submit");

    fireEvent.change(usernameInput, { target: { value: "" } });
    fireEvent.change(passwordInput, { target: { value: "abc123" } });

    expect(submitButton).toBeDisabled();
  });

  it("will disable the login button when password is empty", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );

    const usernameInput = screen.getByTestId("username");
    const passwordInput = screen.getByTestId("password");
    const submitButton = screen.getByTestId("submit");

    fireEvent.change(usernameInput, { target: { value: "sarahedo" } });
    fireEvent.change(passwordInput, { target: { value: "" } });

    expect(submitButton).toBeDisabled();
  });
});
