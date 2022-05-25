import React, { Component } from "react"
import "./Style/style.css"

export default class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <div className="cardBody">
          <div>
            <li><img id="img" src={this.props.img}></img></li>
            <center><li><h4>{this.props.title}</h4></li></center>
            <center><li><p>{this.props.description}</p></li></center>
          </div>
        </div>
      </div>
    )
  }
}