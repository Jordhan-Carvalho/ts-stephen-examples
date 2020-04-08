import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { AverageGoalsAnalysis } from "./analyzers/AverageGoalsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

export interface Analyzer {
  name: string;
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string, name: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  static AverageGoalsWithHtmlReport(team: string): Summary {
    return new Summary(new AverageGoalsAnalysis(team), new ConsoleReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output, `${this.analyzer.name}`);
  }
}
