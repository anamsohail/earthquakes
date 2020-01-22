import React, { Component } from "react";
import PropTypes from "prop-types";
import { markerStyle, markerStyleHover } from "./markerStyle.js";

export default class Marker extends Component {
  static propTypes = {
    $hover: PropTypes.bool,
    color: PropTypes.string
  };

  static defaultProps = {};

  render() {
    const style = this.props.$hover ? markerStyleHover : markerStyle;
    return (
    <div style={style}>
        {this.props.$hover ? "yes": ""}
    </div>);
  }
}
