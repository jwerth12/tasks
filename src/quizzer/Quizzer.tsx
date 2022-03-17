import React from "react";
import quizzes from "../data/quizzes.json";
import { Quiz } from "../interfaces/quiz";
import { Question } from "../interfaces/question";

export type QuestionType = "multiple_choice_question" | "short_answer_question";

/* Developing Data Model
Top level: array of quizzes
Each quiz has a title, description, number of questions, and an array of questions
A question can be multiple choice or short answer (taken from previous Question type)
A question can either be right or wrong (expected answer vs not)
*/

const QUIZZES = quizzes.map(
    (quiz): Quiz => ({
        ...quiz
        /*         title: quiz.title,
        description: quiz.description,
        numQuestions: quiz.numQuestions,
        questions: quiz.questions.map(
            (question): Question => ({
                id: question.id,
                name: question.name,
                body: question.body,
                type: question.type,
                options: question.options,
                expected: question.expected,
                points: question.points,
                published: question.published
            })
        ) */
    })
);

export function Quizzer(): JSX.Element {
    return <h3>Quizzer</h3>;
}
