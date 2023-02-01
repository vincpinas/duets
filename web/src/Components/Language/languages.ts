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
    },
  }
}