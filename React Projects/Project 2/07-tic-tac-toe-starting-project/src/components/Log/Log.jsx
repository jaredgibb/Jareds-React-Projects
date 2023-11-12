export default function Log(log){
    return(
        <ol id="log">
        {log.map((logItem, index) => {
            return <li key={index}>{logItem}</li>;
        })}
        </ol>
    )
}