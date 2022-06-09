import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, long: null, accuracy: null, errorMessage: "" };

  // Convention to put data loading in componentDidMount();
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We called this.setState
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          accuracy: position.coords.accuracy,
        }); // success callback
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      } // error callback
    );
  }

  renderBody() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  // React says we have to define render
  render() {
    return <div className="border red">{this.renderBody()}</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
