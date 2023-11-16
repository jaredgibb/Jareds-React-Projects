import { formatter } from "../../util/investment";

export default function Results({ results, annualInvestment }) {
	console.log(results);
	return (
		<div>
			<table id='result'>
				<thead>
					<tr>
						<td>Year</td>
						<td>Investment Value</td>
						<td>Interest (Year)</td>
						<td>Total Interest</td>
						<td>Invested Capital</td>
					</tr>
				</thead>
				<tbody>
					{results.map((result, index) => {
						return (
							<tr>
								<td>{result.year}</td>
								<td>{formatter.format(result.valueEndOfYear)}</td>
								<td>{formatter.format(result.interest)}</td>
								<td>
									{formatter.format(
										results
											.slice(0, index + 1)
											.map((elm) => {
												return parseFloat(elm.interest);
											})
											.reduce((partialSum, a) => partialSum + a, 0)
									)}
								</td>
								<td>{formatter.format(results[0].annualInvestment + (result.year-1) * annualInvestment)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
