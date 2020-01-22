import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { connect } from "react-redux";
import { fetchDataAction } from "../_actions";
import Marker from "./Marker";
import { K_SIZE } from "./markerStyle.js";

require("dotenv").config();

const API_KEY = process.env.REACT_APP_API_KEY;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 1
  };

  createMarkers = () => {
    const markers = [];
    this.props.data.forEach((loc, key) => {
      markers.push(
        <Marker
          lat={loc.lat}
          lng={loc.lng}
          key={loc.id}
        />
      );
    });
    return markers;
  };

  componentDidMount() {
    this.props.fetchDataAction();
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div>
        <h2 style={{ padding: "20px" }}>Earthquakes!</h2>
        <div style={{ height: "50vh", width: "80%", padding: "20px" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: API_KEY,
              language: "en"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            hoverDistance={K_SIZE / 2}
          >
            {this.createMarkers()}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(mapStateToProps, { fetchDataAction })(GoogleMap);
