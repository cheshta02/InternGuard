import { useState } from "react";

function SearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query, location);
  }

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="e.g. Data Science internship"/>

      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location"/>

      <button type="submit" disabled={loading}> {loading ? "Searching..." : "Search"} </button>
    </form>
  );
}

export default SearchBar;