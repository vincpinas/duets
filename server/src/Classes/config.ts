import questions_lists from "../Data/questions";
import { QuestionList } from "../@types/game";

export class RoomConfig {
  public max_players: number;
  public min_players: number;
  public start_delay: number;
  public questions_lists: QuestionList[];

  constructor() {
    this.max_players = 15;
    this.min_players = 3;
    this.start_delay = 5000;
    this.questions_lists = questions_lists;
  }

  /* 
    Returns either a random number between range 1 and variable (number) or
    a random item in variable (array) depending on variable type.
  */
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