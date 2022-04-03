import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";
import { TakeQuiz } from "./TakeQuiz";

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
});

/*
test("renders the course name somewhere", () => {
    render(<App />);
    const linkElement = screen.getByText(/CISC275/i);
    expect(linkElement).toBeInTheDocument();
});
*/
