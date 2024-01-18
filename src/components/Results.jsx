import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const data = calculateInvestmentResults(input);
  const initialInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;

          const tottalAmountInvestment =
            yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(tottalAmountInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
