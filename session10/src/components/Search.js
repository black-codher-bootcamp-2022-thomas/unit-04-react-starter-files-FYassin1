import React, { useState } from "react";

const Search = (props) => {
  

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchBar(props.keyword);

  };

  const myStyle = {
    color: "red",
    borderRadius:"5px"
};

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <p style={{color:"red"}}> {props.keyword && "Search for your favourite books here!"} </p>
        <div>
          <input
          style={myStyle}
            value={props.keyword}
            onChange={(event) => {
              props.setKeyword(event.target.value);
            }}
          />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default Search;
