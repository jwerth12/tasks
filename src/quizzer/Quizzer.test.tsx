import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";
//import { TakeQuiz } from "./TakeQuiz";
import userEvent from "@testing-library/user-event";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer renders", () => {
        // Up to you to decide what your tests are!
        // Add more tests, more components, more test files!
        render(<Quizzer />);
        const quizElement = screen.getByRole("button", { name: /Take Quiz!/i });
        expect(quizElement).toBeInTheDocument();
    });
    test("Clicking Take Quiz button displays quiz", () => {
        const consoleSpy = jest.spyOn(console, "log");
        render(<Quizzer />);
        const button = screen.getByRole("button", { name: /Take Quiz!/i });
        userEvent.click(button);
        expect(consoleSpy).toHaveBeenCalledWith("Take Quiz");
    });
});

/*
test("renders the course name somewhere", () => {
    render(<App />);
    const linkElement = screen.getByText(/CISC275/i);
    expect(linkElement).toBeInTheDocument();
});
*/
