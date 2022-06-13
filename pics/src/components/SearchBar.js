import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.submitProp(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="text">
              Image Search
              <input
                type="text"
                onChange={(e) => this.setState({ term: e.target.value })}
                value={this.state.term}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}
