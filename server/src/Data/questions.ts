import { QuestionList } from "../@types/game";

const questions_lists: QuestionList[] = [
  {
    name: "Colin",
    description: "De Colin ervaring bij Duet",
    questions: [
      {
        question: "Op welke dag is Uma Noël Orij Rubio (Dochter van Colin) geboren?",
        answers: [{ a: "17 DEC", c: 0 }, { a: "19 DEC", c: 1 }, { a: "27 DEC", c: 0 }, { a: "20 DEC", c: 0 }]
      },
      {
        question: "Van welke sport wordt je volgens Colin het fitste?",
        answers: [{ a: "Bodybuilding", c: 0 }, { a: "Zwemmen", c: 0 }, { a: "CrossFit", c: 1 }, { a: "Boxen", c: 0 }]
      },
      {
        question: "Welke taal is Colin nu aan het leren?",
        answers: [{ a: "Spaans", c: 1 }, { a: "Nederlands", c: 0 }, { a: "Russisch", c: 0 }, { a: "Chinees", c: 0 }]
      },
    ]
  },
  // {
  //   name: "General",
  //   questions: [
  //     {
  //       question: "Wat is de standaard lunch bij duet?",
  //       answers: [{ a: "Salade", c: 1 }, { a: "Truffel Mayonaise", c: 0 }, { a: "Broodje Bal", c: 0 }, { a: "Appeltaart", c: 0 }]
  //     },
  //     {
  //       question: "Hoe heet de methode van classes schrijven die bij Duet gebruikt wordt?",
  //       answers: [{ a: "BBEM", c: 0 }, { a: "BEM", c: 0 }, { a: "ABEM", c: 0 }, { a: "CBEM", c: 0 }]
  //     },
  //     {
  //       question: "",
  //       answers: [{ a: "", c: 0 }, { a: "", c: 0 }, { a: "", c: 0 }, { a: "", c: 0 }]
  //     },
  //   ]
  // },
]

export default questions_lists;