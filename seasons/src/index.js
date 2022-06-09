import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {
  state = { lat: null, long: null, accuracy: null, errorMessage: "" };

  // Convention to put data loading in componentDidMount()
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        // We called this.setState
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          accuracy: position.coords.accuracy,
        }); // success callback
      },
      (err) => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      } // error callback
    );
  }

  // React says we have to define render
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <div>Lat: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
