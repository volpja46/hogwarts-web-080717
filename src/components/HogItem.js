import React, { Component } from 'react';


class HogItem extends Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    let toggledClick = !this.state.clicked
    this.setState({
      clicked: toggledClick
      })
    }

  showMoreInfo = () => {
    return (
      <div className ="moreInfo">
        <p>specialty: {this.props.hog.specialty}</p>
        <p>medal: {this.props.hog['highest medal achieved']}</p>
        <p>medal: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
    </div>
    )
  }

  render(){
    return (
      <div className = "pigs" onClick={this.handleClick}>
        <p>{this.props.hog.name}</p>
        <img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(" ").join("_")}.jpg`)} alt="piggy"/>
        {this.state.clicked ? this.showMoreInfo() : null}
     </div>
    )
  }
}

export default HogItem;


// name
// specialty
// greased
// weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water
// highest
// highest medal achieved
