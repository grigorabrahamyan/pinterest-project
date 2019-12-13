import React from "react";
//import TextField from "@material-ui/core/TextField";
import "./search.css";

function Search() {
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

export default Search;