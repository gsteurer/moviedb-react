import React, { Component } from "react";
import axios from "axios";
import "./MovieSearch.css";

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
    };
  }
  render() {
    return (
      <div className="md-form mt-0">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        ></input>
      </div>
    );
  }

  componentDidMount() {}
}
export default MovieSearch;
