export default function Log({ log = [] }) {
	return (
		<ol id='log'>
			{log.map((logItem, index) => {
				return (
					<li key={`${logItem.square.row}${logItem.square.col}`}>
						{logItem.player} selected {logItem.square.row},{logItem.square.col}
					</li>
				);
			})}
		</ol>
	);
}
