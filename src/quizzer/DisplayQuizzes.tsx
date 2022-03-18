import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import quizzes from "../data/quizzes.json";
import { Quiz } from "../interfaces/quiz";

const QUIZZES = quizzes.map(
    (quiz): Quiz => ({
        ...quiz
    })
);

export function DisplayQuizzes(): JSX.Element {
    return (
        <div>
            Quizzes:
            <Form.Group controlId="quizdisplay">
                {QUIZZES.map((quiz: Quiz) => (
                    <div
                        key="display"
                        style={{ border: "1px solid blue", padding: "4px" }}
                    >
                        <div key="quiz">
                            <strong>{quiz.title}</strong>
                        </div>
                        <div key="description">
                            Description: {quiz.description}
                        </div>
                        <div key="numQuestions">
                            There are {quiz.numQuestions} questions
                        </div>
                    </div>
                ))}
            </Form.Group>
        </div>
    );
}
