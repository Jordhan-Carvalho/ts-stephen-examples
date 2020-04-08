import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";

export class AverageGoalsAnalysis implements Analyzer {
  constructor(public teamName: String) {}

  name = "avgGoals";

  run(matches: MatchData[]): string {
    let totalGoals = 0;
    let matchesPlayed = 0;
    for (let match of matches) {
      if (match[1] === this.teamName) {
        totalGoals += match[3];
        matchesPlayed++;
      } else if (match[2] === this.teamName) {
        totalGoals += match[4];
        matchesPlayed++;
      }
    }

    const average = totalGoals / matchesPlayed;
    return `Goals average was ${Math.round(average)}`;
  }
}
