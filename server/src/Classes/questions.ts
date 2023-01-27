import { QuestionList } from "../Interfaces/game";

const questions_lists: QuestionList[] = [
  {
    name: "colin",
    questions: [
      {
        question: "Op welke dag is Uma Noël Orij Rubio geboren?",
        answers: [{ a: "17 DEC", c: 0 }, { a: "19 DEC", c: 1 }, { a: "27 DEC", c: 0 }, { a: "20 DEC", c: 0 }]
      },
      {
        question: "Wat voor soort sport is volgens Colin het beste?",
        answers: [{ a: "Bodybuilding", c: 0 }, { a: "Zwemmen", c: 0 }, { a: "CrossFit", c: 1 }, { a: "Boxen", c: 0 }]
      },
      {
        question: "Welke taal is Colin nu aan het leren?",
        answers: [{ a: "Spaans", c: 1 }, { a: "Nederlands", c: 0 }, { a: "Russisch", c: 0 }, { a: "Chinees", c: 0 }]
      },
    ]
  },
]

export default questions_lists;