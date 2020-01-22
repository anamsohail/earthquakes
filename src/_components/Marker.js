import React, { Component } from "react";
import PropTypes from "prop-types";
import { markerStyle, markerStyleHover } from "./markerStyle.js";

export default class Marker extends Component {
  static propTypes = {
    $hover: PropTypes.bool,
    color: PropTypes.string
  };

  static defaultProps = {};

  handleClick(event) {
    // do something meaningful
  }

  render() {
     // console.log(this.props)
    const size = this.props.mag * 10;
    const anotherStyle = {
      width: size,
      height: size,
      left: -size / 2,
      top: -size / 2,
      borderRadius: size
    };
    const style = this.props.$hover ? markerStyleHover : markerStyle;
    return <div style={{ ...style, ...anotherStyle }} onClick={() => this.props.update()}></div>;
  }
}
