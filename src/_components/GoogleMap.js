import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { connect } from "react-redux";
import { fetchDataAction } from "../_actions";
import Marker from "./Marker";
import { K_SIZE } from "./markerStyle.js";

require('dotenv').config()

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
          text="My Marker"
          color="blue"
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
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          className="markercluster-map"
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
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(mapStateToProps, { fetchDataAction })(GoogleMap);
