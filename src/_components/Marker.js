import React, { Component } from "react";
import PropTypes from "prop-types";
import { markerStyle, markerStyleHover } from "./markerStyle.js";

export default class Marker extends Component {
  static propTypes = {
    $hover: PropTypes.bool,
    text: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string
  };

  static defaultProps = {};

  render() {
    const style = this.props.$hover ? markerStyleHover : markerStyle;
    return <div style={style}>{this.props.text}</div>;
  }
}
