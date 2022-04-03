import React, { useState } from "react";
import { Form } from "react-bootstrap";
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
    let choices: string[]; // array of selected choices, for scoring later

    // set choice must be independent for each question because should be able to select answer for each
    function updateChoice(event: React.ChangeEvent<HTMLInputElement>) {
        setChoice(event.target.value);
        // update choices array with this value, index must match the question order
        //const index = quiz.questions.indexOf(event.target.value);
        choices.push(choice);
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
                                key={question.order} // key should be umique to question
                                value={option}
                                type="radio"
                                name={option}
                                onChange={updateChoice}
                                id="option-check"
                                label={option}
                                //checked={choice === option} // this aint it chief
                            />
                        ))}
                    </div>
                ))}
            </Form.Group>
        </div>
    );
}
