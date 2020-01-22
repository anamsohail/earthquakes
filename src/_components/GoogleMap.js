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

  constructor(props) {
    super(props)
    this.state = {
      place: "",
      mag: "",
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({place: this.state.place, mag: this.state.mag})
  }

  createMarkers = () => {
    const markers = [];
    this.props.data.forEach((loc, key) => {
      markers.push(
        <Marker
          update={this.updateState}
          lat={loc.lat}
          lng={loc.lng}
          key={loc.id}
          mag={loc.mag}
          place={loc.place}
        />
      );
    });
    return markers;
  };

  componentDidMount() {
    this.props.fetchDataAction();
  }

  render() {
    console.log(this.state)
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
          <p>{this.props.place}</p>
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
