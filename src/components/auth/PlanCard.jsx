export default function PlanCard({
    name,
    price,
    duration,
    features,
    selected,
    onSelect,
}) {
    return (
        <div className={`plan-card ${selected ? "selected" : ""}`}>
            <div className="plan-card-header">
                <h3>{name}</h3>
                <span>{duration}</span>
            </div>

            <div className="plan-price"> <strong>{price}</strong> </div>

            <ul className="plan-features">
                {features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                ))}
            </ul>

            <button type="button" onClick={onSelect} className="plan-select-button">
                {selected ? "Selected" : "Choose Plan"}
            </button>
        </div>
    );
}