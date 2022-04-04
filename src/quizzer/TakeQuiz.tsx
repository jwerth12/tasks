import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { quizQuestion } from "../interfaces/quizquestion";
//import { DisplayQuestions } from "./displayQuestions";

export function TakeQuiz(quiz: Quiz): JSX.Element {
    /*
        Takes in a quiz as input
        Quiz contains an array of quiz questions
        quizquestions contain a question (string), an answer (string), an array of options (strings)
        Want to map each OPTION from quiz question options as the multiple choices 
    */
    /*  scoreQuiz function
        To submit the quiz and check answers, must store picked options in an array
        must also then map all correct answers to an array in proper order 
        Then compare the two arrays to determine a score on quiz  
   */

    const [choice, setChoice] = useState<string>("");
    let choices: string[] = Array(quiz.numQuestions); // array of selected choices, for scoring later

    // set choice must be independent for each question because should be able to select answer for each
    function updateChoice(event: React.ChangeEvent<HTMLInputElement>) {
        setChoice(event.target.value);
        // update choices array with this value, index must match the question order
        //const index = quiz.questions.indexOf(event.target.value);
        //choices[question.order] = event.target.value;
        choices.push(event.target.value);
    }
    function clearChoices() {
        setChoice("");
        choices = [];
    }
    function checkAnswers(): number {
        return 0;
    }
    return (
        <div>
            {quiz.title}
            <Form.Group controlId="quiz">
                {quiz.questions.map((question: quizQuestion) => (
                    <div key={question.question} data-testid="question">
                        <div>
                            {question.order} {question.question} (1 point)
                        </div>
                        {question.options.map((option: string) => (
                            <Form.Check
                                inline
                                key={question.order} // key should be umique to question
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
            <Button onClick={clearChoices}>Clear Answers</Button>
            <Button onClick={checkAnswers}>Submit Answers</Button>
        </div>
    );
}
