import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState(props);
  const handleChange = event => {
    props.setQuery(event.target.value);
  };

  return (
    <section className="search-form">
     <form>
       <input
        type="text"
        name="textfield"
        placeholder="Search"
        value={props.query}
        onChange={handleChange}
        autoComplete="off"
        />
     </form>
    </section>
  );
}
