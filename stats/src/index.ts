import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

// INHERITANCE APPROACH
// const readerFoot = new MatchReader("football.csv");
// readerFoot.read();

// const csvFileReader = new CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
const summary = Summary.winsAnalysisWithHtmlReport("Man United");

summary.buildAndPrintReport(matchReader.matches);
