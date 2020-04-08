import { MatchReader } from "./MatchReader";
// import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { AverageGoalsAnalysis } from "./analyzers/AverageGoalsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
// import { WinsAnalysis } from "./analyzers/WinsAnalysis";

// INHERITANCE APPROACH
// const readerFoot = new MatchReader("football.csv");
// readerFoot.read();

// INTERFACE APPROACH
// const csvFileReader = new CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
// to see the match matchReader.matches
const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
const summary = Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);

// or this way
Summary.AverageGoalsWithHtmlReport("Wolves").buildAndPrintReport(
  matchReader.matches
);

const goalsSummary = new Summary(
  new AverageGoalsAnalysis("Wolves"),
  new HtmlReport()
);
goalsSummary.buildAndPrintReport(matchReader.matches);
