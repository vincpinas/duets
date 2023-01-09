// Interfaces
export interface language {
  lang: string; // Language name
  abbreviation: string; // Language code
  sub?: string | null; // Sub text in the language list
  status: number; // 0: Inactive, 1: Active
}

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
      join: "Enter room PIN"
    },
    join: {
      footer: "This project was made for my last day of internship at",
      button: "Enter",
      room: "Room PIN",
      name: "Name",
    },
    room: {
      wait: "Waiting",
      start: "Starting",
      players: "Players",
    },
  },

  dutch: {
    helmet: {
      join: "Voer kamer-PIN in"
    },
    join: {
      footer: "Dit project is gemaakt voor mijn laatste dag stage bij",
      button: "Invoeren",
      room: "Kamer-Pin",
      name: "Naam",
    },
    room: {
      wait: "Wachten",
      start: "Starten",
      players: "Spelers",
    },
  },

  spanish: {
    helmet: {
      join: "Entrar PIN de habitación"
    },
    join: {
      footer: "Esto proyecto fue hecho para mi último día de prácticas a",
      button: "Entrar",
      room: "PIN de habitación",
      name: "Nombre",
    },
    room: {
      wait: "Esperando",
      start: "Comenzar",
      players: "Jugadores",
    },
  }
}