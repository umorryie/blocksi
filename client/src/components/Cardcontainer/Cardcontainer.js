import React, { Component } from "react";
import Card from "../Card/Card";
export default class Cardcontainer extends Component {
  constructor(props) {
    super(props);
    this.state = { aray: [] };
  }
  componentDidMount() {
    this.setState({ aray: this.props.listContacs });
  }
  render() {
    console.log(this.props.listContacs);
    let arey = [];
    if (this.props.listContacs.length !== 0) {
    }
    console.log(arey);
    console.log(this.state);
    return <div className="containerfullofcontats">{"aray"}</div>;
  }
}
