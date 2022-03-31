import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import quizzes from "../data/quizzes.json";
import { Quiz } from "../interfaces/quiz";
import { quizQuestion } from "../interfaces/quizquestion";

export function TakeQuiz(quiz: Quiz): JSX.Element {
    /*
        Takes in a quiz as input
        Quiz contains an array of quiz questions
        quizquestions contain a question (string), an answer (string), an array of options (strings)
        Want to map each OPTION from quiz question options as the multiple choices 
    */
    const [choice, setChoice] = useState<string>("");
    function updateChoice(event: React.ChangeEvent<HTMLInputElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            {quiz.title}
            <Form.Group controlId="quiz">
                {quiz.questions.map((question: quizQuestion) => (
                    <div key={question.question}>
                        <div>
                            {question.order}) {question.question}
                        </div>
                        {question.options.map((option: string) => (
                            <Form.Check
                                inline
                                key={option}
                                value={option}
                                type="radio"
                                name={option}
                                onChange={updateChoice}
                                id="option-check"
                                label={option}
                                checked={choice === option}
                            />
                        ))}
                    </div>
                ))}
            </Form.Group>
        </div>
    );
}
