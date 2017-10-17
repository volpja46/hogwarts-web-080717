import React, { Component } from 'react';


class HogSort extends Component {



  render(){
    return (
        <form onChange={this.props.handleChange}>
          <select name="hogs">
            <option value="All">All</option>
            <option value="A-Z">A-Z</option>
            <option value="Weight">Weight</option>
          </select>
        </form>
    )
  }
}

export default HogSort
