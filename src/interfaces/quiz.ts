import { Question } from "./question";
export type QuestionType = "multiple_choice_question" | "short_answer_question";

//export type QuizType = "multiple_choice" | "short answer";
export interface Quiz {
    title: string;
    description: string;
    numQuestions: number;
    questions: string[];
}
