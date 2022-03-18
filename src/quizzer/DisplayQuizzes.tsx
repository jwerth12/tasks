import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import quizzes from "../data/quizzes.json";
import { Quiz } from "../interfaces/quiz";
//import { Form } from "react-bootstrap";

const QUIZZES = quizzes.map(
    (quiz): Quiz => ({
        ...quiz
    })
);

export function DisplayQuizzes(): JSX.Element {
    const [choice, setChoice] = useState<string>("");
    function updateChoice(title: string) {
        setChoice(title);
    }

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
                        <Button onClick={() => updateChoice(quiz.title)}>
                            Take Quiz!
                        </Button>
                    </div>
                ))}
            </Form.Group>
            <div>You have chosen to take the {choice}</div>
        </div>
    );
}
