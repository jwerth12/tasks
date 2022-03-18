//export type QuestionType = "multiple_choice_question" | "short_answer_question";

export interface quizQuestion {
    /** question prompt */
    question: string;
    /** correct answer */
    answer: string;
    /** question type, either multiple choice or short answer */
    type: string;
    /** order of question -- later will be used to reorder */
    order: number;
    /** possible options given multiple choice */
    options: string[];
    /** published boolean, used to later decide if want to publish or unpublish question */
    published: boolean;
}
