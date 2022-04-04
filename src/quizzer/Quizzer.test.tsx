import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";
//import { TakeQuiz } from "./TakeQuiz";
import userEvent from "@testing-library/user-event";
import { DisplayQuizzes } from "./DisplayQuizzes";
import { TakeQuiz } from "./TakeQuiz";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer renders", () => {
        // Up to you to decide what your tests are!
        // Add more tests, more components, more test files!
        render(<Quizzer />);
        const quizzerHead = screen.getAllByRole("heading", {
            name: /Quizzer/i
        });
        expect(quizzerHead.length).toBeGreaterThanOrEqual(1);
    });

    test("Multiple quizzes are visible", () => {
        render(<Quizzer />);
        const quizElement = screen.getAllByRole("button", {
            name: /Take Quiz!/i
        });
        expect(quizElement.length).toBeGreaterThanOrEqual(2);
    });

    test("Quiz descriptions, numQuestions, etc are visible", () => {
        render(<Quizzer />);
        const descriptions = screen.getAllByTestId("quizDetails");
        const quizElement = screen.getAllByRole("button", {
            name: /Take Quiz!/i
        });
        expect(descriptions.length).toEqual(quizElement.length); // should have same number of descriptions as quizzes displayed
    });

    test("Quizzes have questions: clicking on quiz shows questions", () => {
        render(<Quizzer />);
        const button = screen.getAllByRole("button", { name: /Take Quiz!/i });
        userEvent.click(button[0]);
        const quizQuestions = screen.getAllByTestId("question");
        expect(quizQuestions.length).toBeGreaterThanOrEqual(1);
        userEvent.click(button[1]);
        expect(quizQuestions.length).toBeGreaterThanOrEqual(1);
    });

    test("Clear Answers: can hit clear answers and answers will be reset to blank", () => {
        render(<Quizzer />);
        const button = screen.getAllByRole("button", { name: /Take Quiz!/i });
        userEvent.click(button[0]);
        const resetbutton = screen.getByRole("button", {
            name: /Clear Answers/i
        });
        userEvent.click(resetbutton);
    });
});
