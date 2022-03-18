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
                    <div>{quiz.title}</div>
                ))}
            </Form.Group>
        </div>
    );
}
