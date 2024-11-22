import { calculateInvestmentResults ,formatter} from "../util/investment";

export default function Result({ input}) {
  if (!formatter) {
    console.error("Formatter is undefined");
    return null;
  }

  const resultData = calculateInvestmentResults(input);
  if (!resultData || resultData.length === 0) {
    return <p>No data to display</p>;
  }

  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  console.log(resultData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalIntrest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear || 0)}</td>
              <td>{formatter.format(yearData.interest || 0)}</td>
              <td>{formatter.format(totalIntrest || 0)}</td>
              <td>{formatter.format(initialInvestment || 0)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
