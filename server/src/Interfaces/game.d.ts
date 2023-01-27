export interface QuestionList {
  name: string;
  questions: Question[];
}

export interface Question {
  question: string;
  answers: { a: string; c: boolean | number; }[];
}

