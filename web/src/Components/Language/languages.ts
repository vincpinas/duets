import { language } from "../../@types/client";

// Static list of available languages
export const languages: language[] = [
  {
    lang: 'English (US)',
    abbreviation: 'EN',
    sub: null,
    status: 1
  },
  {
    lang: 'Nederlands',
    abbreviation: 'NL',
    sub: null,
    status: 1
  },
  {
    lang: 'Español',
    abbreviation: 'ES',
    sub: null,
    status: 1
  },
  {
    lang: 'Duetnec',
    abbreviation: 'DU',
    sub: 'Official Duet Language',
    status: 0
  },
  {
    lang: 'Deutsch',
    abbreviation: 'DE',
    sub: null,
    status: 0
  },
];

export const translations = {
  english: {
    helmet: {
      join: "Enter room PIN",
      room: "Have fun!"
    },
    join: {
      footer: "This project was made for my internship at",
      button: "Enter",
      room: "Room PIN",
      name: "Name",
      rooms: "Open rooms",
    },
    room: {
      wait: "Waiting",
      start: "Starting",
      running: "Running",
      players: "Players",
      room: "Room",
      quiz: "Selected Quiz",
      ready: "Ready?",
      go: "Let's go!",
      waiting_for: "Waiting for",
      more_players: "more players",
      ready_up: "players to ready up",
      starting_in: "Starting game in",
      seconds: "seconds",
    },
    game_end: {
      first: "1st",
      second: "2nd",
      third: "3rd",
      score: "Score",
    },
    game_end_wait: {
      please_wait: "Please wait for the other players to finish before we look at the results!",
      finished: "Players Finished",
    },
  },

  dutch: {
    helmet: {
      join: "Voer kamer-PIN in",
      room: "Veel plezier!"
    },
    join: {
      footer: "Dit project is gemaakt voor mijn stage bij",
      button: "Invoeren",
      room: "Kamer-Pin",
      name: "Naam",
      rooms: "Open kamers",
    },
    room: {
      wait: "Wachten",
      start: "Starten",
      running: "Lopend",
      players: "Spelers",
      room: "Kamer",
      quiz: "Geselecteerde Quiz",
      ready: "Klaar voor?",
      go: "Let's go!",
      waiting_for: "Wachten op",
      more_players: "meer spelers",
      ready_up: "spelers om zich klaar te maken",
      starting_in: "Spel begint in",
      seconds: "seconden",
    },
    game_end: {
      first: "1e",
      second: "2e",
      third: "3e",
      score: "Scoren",
    },
    game_end_wait: {
      please_wait: "Wacht a.u.b tot de andere spelers klaar zijn voordat we naar de resultaten kijken!",
      finished: "Spelers geëindigd",
    },
  },

  spanish: {
    helmet: {
      join: "Entrar PIN de habitación",
      room: "Que te diviertas!"
    },
    join: {
      footer: "Esto proyecto fue hecho para mi prácticas a",
      button: "Entrar",
      room: "PIN de habitación",
      name: "Nombre",
      rooms: "Habitaciones",
    },
    room: {
      wait: "Esperando",
      start: "Comenzar",
      running: "Funcionamiento",
      players: "Jugadores",
      room: "Habitación",
      quiz: "Cuestionario Seleccionado",
      ready: "¿Listo?",
      go: "¡Vamos!",
      waiting_for: "Esperando",
      more_players: "mas jugadores",
      ready_up: "jugadores a prepararse",
      starting_in: "Partida inicial en",
      seconds: "segundos",
    },
    game_end: {
      first: "1º",
      second: "2do",
      third: "3ro",
      score: "Puntaje",
    },
    game_end_wait: {
      please_wait: "¡Espera a que los otros jugadores terminen antes de que veamos los resultados!",
      finished: "Jugadores terminados",
    },
  }
}