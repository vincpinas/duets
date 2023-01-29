interface QuestionList {
  name: string;
  description: string;
  questions: Question[];
}

interface Question {
  question: string;
  answers: { a: string; c: boolean | number; }[];
}

