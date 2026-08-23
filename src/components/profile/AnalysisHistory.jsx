import { useState } from "react";
import EmptyHistory from "./EmptyHistory";

export default function AnalysisHistory() {
    const [history, setHistory] = useState([]);

    return (
        <section className="analysis-history">
            <h2>Scan History</h2>
            <EmptyHistory />
        </section>
    );
}