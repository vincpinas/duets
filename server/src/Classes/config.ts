import questions_lists from "../Data/questions";
import { QuestionList } from "../Interfaces/game"

export class RoomConfig {
  public max_players: number;
  public min_players: number;
  public start_delay: number;
  public questions_lists: QuestionList[];

  constructor() {
    this.max_players = 15;
    this.min_players = 1;
    this.start_delay = 1000;
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