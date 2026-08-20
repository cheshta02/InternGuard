export default function HistoryItem({ analysis }) {
    return (
        <article className="history-item">
            <div>
                <h3>{analysis.jobTitle}</h3>
                <p>{analysis.date}</p>
                <p> Risk Level: <strong>{analysis.riskLevel}</strong> </p>
                <p> Risk Score: {analysis.riskScore} </p>
            </div>

            <button type="button">  View Full Report </button>
        </article>
    );
}