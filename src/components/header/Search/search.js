import React from "react";
import "./search.css";

export default function Search() {
  return (
      <div>
        <form>
          <input className="search"
            variant="outlined"
            id="search"
            placeholder="  Search"
            name="search"
            autoComplete="search"
          />
        </form>
      </div>
  );
}

