import { useNavigate } from "react-router-dom";

export default function EmptyHistory() {
    const navigate = useNavigate();

    return (
        <div className="empty-history">
            <h3>No analyses yet</h3>
            <p> Your analyzed job postings and reports will appear here. </p>
            <button type="button" onClick={() => navigate("/analyze")}> Analyze a Job </button>
        </div>
    );
}