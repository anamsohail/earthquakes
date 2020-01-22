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
    super(props);
    this.state = {
      place: "",
      mag: ""
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(place, mag) {
    this.setState({ place: place, mag: mag });
  }

  componentDidMount() {
    this.props.fetchDataAction();
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <h2>Earthquakes!</h2>
        <div className={"mapStyle"}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: API_KEY,
              language: "en"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            hoverDistance={K_SIZE / 2}
          >
            {data &&
              data.map((loc, key) => {
                return (
                  <Marker
                    update={this.updateState}
                    lat={loc.lat}
                    lng={loc.lng}
                    key={loc.id}
                    mag={loc.mag}
                    place={loc.place}
                  />
                );
              })}
          </GoogleMapReact>
        </div>
        <p>
          {this.state.place
            ? `Earthquake of magnitude ${this.state.mag} at ${this.state.place}`
            : ""}
        </p>
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
