import { QuestionList } from "../@types/game";

const questions_lists: QuestionList[] = [
  {
    name: "Colin",
    description: "Random dingen over Colin",
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
      {
        question: "Hoe is colin als stage begeleider?",
        answers: [{ a: "Chill", c: 1 }, { a: "Goed", c: 1 }, { a: "Streng", c: 0 }, { a: "Raar", c: 0 }]
      },
    ]
  },
  {
    name: "General",
    description: "De standaard ervaring bij duet?",
    questions: [
      {
        question: "Wat is de standaard lunch bij duet?",
        answers: [{ a: "Salade", c: 1 }, { a: "Truffel Mayonaise", c: 0 }, { a: "Broodje Bal", c: 0 }, { a: "Appeltaart", c: 0 }]
      },
      {
        question: "Hoe heet de methode van classes schrijven die bij Duet gebruikt wordt?",
        answers: [{ a: "BBEM", c: 0 }, { a: "BEM", c: 0 }, { a: "ABEM", c: 0 }, { a: "CBEM", c: 0 }]
      },
      {
        question: "Wat wordt er (vrijwel) altijd gedaan tijdens een korte pauze?",
        answers: [{ a: "Roken", c: 0 }, { a: "Darten", c: 1 }, { a: "Lezen", c: 0 }, { a: "Niks", c: 0 }]
      },
      {
        question: "Waar kan sybren niet tegen?",
        answers: [{ a: "Kaas", c: 0 }, { a: "Truffel Mayonaise", c: 0 }, { a: "Gember", c: 1 }]
      },
      {
        question: "Waar kan Vincent niet tegen?",
        answers: [{ a: "Alle Kaas", c: 0 }, { a: "Gesmolten Kaas", c: 1 }, { a: "Gember", c: 0 }, { a: "Blauwe Kaas", c: 1 }]
      },
      {
        question: "Welke technology word gebruikt om websites te bouwen bij Duet?",
        answers: [{ a: "Wix", c: 0 }, { a: "Wordpress", c: 1 }, { a: "Zeplin", c: 0 }, { a: "React", c: 0 }]
      },
      {
        question: "Waarom heeft het bedrijf de naam Duet?",
        answers: [{ a: "Geen reden", c: 0 }, { a: "WE zijn een Duet", c: 1 }, { a: "Schattige naam", c: 0 }]
      },
      {
        question: "Wie lijkt er op Elon Musk?",
        answers: [{ a: "Vincent", c: 0 }, { a: "Niels", c: 1 }, { a: "Colin", c: 0 }, { a: "Sybren", c: 0 }]
      },
    ]
  },
]

export default questions_lists;