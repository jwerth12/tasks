import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import quizzes from "../data/quizzes.json";
import { Quiz } from "../interfaces/quiz";
import { TakeQuiz } from "./TakeQuiz";
//import { Form } from "react-bootstrap";

const QUIZZES = quizzes.map(
    (quiz): Quiz => ({
        ...quiz
    })
);

export function DisplayQuizzes(): JSX.Element {
    const [choice, setChoice] = useState<Quiz>(QUIZZES[0]);
    const [takingQuiz, chooseQuiz] = useState<boolean>(false);
    function updateChoice(quiz: Quiz) {
        setChoice(quiz);
        chooseQuiz(true);
    }
    return (
        <div>
            {!takingQuiz && (
                <Form.Group controlId="quizdisplay">
                    {QUIZZES.map((quiz: Quiz) => (
                        <div
                            key="display"
                            style={{
                                border: "1px solid blue",
                                padding: "10px"
                            }}
                        >
                            <div key="title">
                                <strong>{quiz.title}</strong>
                            </div>
                            <div key="description">
                                Description: {quiz.description}
                            </div>
                            <div key="numQuestions">
                                There are {quiz.numQuestions} questions
                            </div>
                            <Button onClick={() => updateChoice(quiz)}>
                                Take Quiz!
                            </Button>
                        </div>
                    ))}
                </Form.Group>
            )}
            {takingQuiz && (
                <div>
                    <TakeQuiz
                        title={choice.title}
                        description={choice.description}
                        numQuestions={choice.numQuestions}
                        questions={choice.questions}
                    ></TakeQuiz>
                </div>
            )}
        </div>
    );
}
