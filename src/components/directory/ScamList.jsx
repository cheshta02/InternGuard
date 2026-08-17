import ScamCard from "./ScamCard";

function ScamList({ scams, onView }) {
  if (!scams || scams.length === 0) {
    return (
      <div className="scam-empty">
        <h3>No reports found</h3>
        <p> Try changing your search or removing some filters. </p>
      </div>
    );
  }

  return (
    <div className="scam-list">
      {scams.map((scam) => (
        <ScamCard
          key={scam.id}
          scam={scam}
          onView={onView}
        />
      ))}
    </div>
  );
}

export default ScamList;