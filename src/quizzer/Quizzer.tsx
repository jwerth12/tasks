import React, { useState } from "react";
import { DisplayQuizzes } from "./DisplayQuizzes";
//import { Question } from "../interfaces/question";

export type QuestionType = "multiple_choice_question" | "short_answer_question";

/* Developing Data Model
Top level: array of quizzes
Each quiz has a title, description, number of questions, and an array of questions
A question can be multiple choice or short answer (taken from previous Question type)
A question can either be right or wrong (expected answer vs not)
*/

export function Quizzer(): JSX.Element {
    //const [isSelected, select] = useState<boolean>(false);
    return (
        <div>
            <h3>Quizzer</h3>
            <DisplayQuizzes></DisplayQuizzes>
        </div>
    );
}
