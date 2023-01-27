import questions_lists from "./questions";
import { QuestionList } from "../Interfaces/game"

export class RoomConfig {
  max_players: number;
  min_players: number;
  start_delay: number;
  questions_lists: QuestionList[];

  constructor() {
    this.max_players = 15;
    this.min_players = 3;
    this.start_delay = 15000;
    this.questions_lists = questions_lists;
  }


  randomize(variable: number | Array<any>) {
    switch (typeof variable) {
      case "number":
        return Math.floor(Math.random() * Math.floor(variable)) + 1;
      case "object":
        return variable[Math.floor(Math.random() * Math.floor(variable.length))]
      default:
        return null;
    }
  }
}