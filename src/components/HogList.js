import React from 'react';
import HogItem from './HogItem'

const HogList = props => {

const hogItems = props.hogData.map((hog,index) => {
  return <HogItem hog={hog} key={index}/>
})

    return (
      <ul>
        {hogItems}
      </ul>
    )

}

export default HogList;


// name
// specialty
// greased
// weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water
// highest
// highest medal achieved
