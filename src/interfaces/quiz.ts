import { quizQuestion } from "././quizquestion";
//export type QuizType = "multiple_choice" | "short answer";
export interface Quiz {
    /** a unique quiz title */
    title: string;
    /** a description of what the quiz is about */
    description: string;
    /** the number of questions in the quiz */
    numQuestions: number;
    /** an array of questions that are asked in the quiz */
    questions: quizQuestion[];
}
