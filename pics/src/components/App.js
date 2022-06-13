// import React from "react";
import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";


export class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    //use axios to make network request
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar submitProp={this.onSearchSubmit} />
        Found: {this.state.images.length}
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="ui container" style={{ marginTop: "10px" }}>
//       <SearchBar />
//     </div>
//   );
// }

// export default App;
