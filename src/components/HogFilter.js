import React, { Component } from 'react';


class HogFilter extends Component {



  render(){
    return (
        <form onChange={this.props.handleChange}>
          <select name="hogs">
            <option value="all">All</option>
            <option value="greased">greased</option>
            <option value="ungreased">ungreased</option>
          </select>
        </form>
    )
  }
}

export default HogFilter
