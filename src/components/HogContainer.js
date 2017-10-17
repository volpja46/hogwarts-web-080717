import React, { Component } from 'react';
import Hogs from '../porkers_data'
import HogList from './HogList'
import HogFilter from './HogFilter'
import HogSort from './HogSort'

class HogContainer extends Component {

  state = {
    hogs: Hogs,
    filter: 'all',
    sortedHogs: []
  }


  handleChange = (event) => {
    this.setState ({
      filter: event.target.value
    })
  }

    handleSort = (event) => {
      if (event.target.value == 'A-Z') {
        const sortedHogs = [...this.state.hogs]
        this.setState({
          sortedHogs: sortedHogs.sort((hogA, hogB) =>
            hogA.name < hogB.name ? -1 : hogA.name > hogB.name ? 1 : 0)
          })
        } else if (event.target.value == "weight"){
					const sortedHogs = [...this.state.hogs]
					this.setState({
					sortedHogs: sortedHogs.sort((a,b) =>
					 a.weight < b.weight ? 1 : a.weight > b.weight? -1 : 0)
					})
	 	    } else if (event.target.value == "All") {
					this.setState((prevState, curProps) => {
	 	        return {sortedHogs: prevState.hogs}
	 	        })
				}
	 		}


  hogsToRender = () => {
    if (this.state.filter == 'all') {
        return this.state.sortedHogs
      } else if (this.state.filter == 'greased') {
          return this.state.sortedHogs.filter(hog => {
          return hog.greased === true
          })
      } else if (this.state.filter == 'ungreased') {
        return this.state.sortedHogs.filter(hog => {
        return hog.greased === false
        })
      }
    }


  // hogsToRender = () => {
  //   const renderableHogs = [...this.state.hogs]
  //   if (this.state.filter == 'all') {
  //     this.setState = ({
  //
  //     })
  //     } else if (this.state.filter == 'greased') {
  //         return this.state.hogs.filter(hog => {
  //         return hog.greased === true
  //         })
  //     } else if (this.state.filter == 'ungreased') {
  //       return this.state.hogs.filter(hog => {
  //       return hog.greased === false
  //       })
  //     }
  //   }

  render() {

    return (
      <div>
        <HogFilter handleChange={this.handleChange} />
        <HogSort handleChange={this.handleSort} />
        <HogList hogData={this.hogsToRender()}/>
    </div>
    )
  }
}

export default HogContainer;
