import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import quizzes from "../data/quizzes.json";
import { Quiz } from "../interfaces/quiz";

export function TakeQuiz(quiz: Quiz): JSX.Element {
    const QUIZZES = quizzes.map(
        (quiz): Quiz => ({
            ...quiz
        })
    );
    const [choice, setChoice] = useState<string>("");
    return (
        <div>
            {quiz.title}
            <Form.Group controlId="question">
                <Form.Label>{choice}</Form.Label>
            </Form.Group>
        </div>
    );
}
