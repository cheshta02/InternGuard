import { useEffect, useState } from "react";

import EmptyHistory from "./EmptyHistory";
import HistoryItem from "./HistoryItem";

export default function AnalysisHistory() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const savedHistory = localStorage.getItem("analysisHistory");

        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        }
    }, []);

    return (
        <section className="analysis-history">
            <h2>Scan History</h2>

            {history.length === 0 ? (
                <EmptyHistory />
            ) : (
                history.map((item) => (
                    <HistoryItem key={item.id} analysis={item} />
                ))
            )}
        </section>
    );
}