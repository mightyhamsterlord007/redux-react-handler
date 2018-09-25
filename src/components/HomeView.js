import React from 'react'

const HomeView = (props) => {
  return (
    <div>
      From Home HomeView    
      <br />
      {props.homeViewClicked}
    </div>
  )
}

export default HomeView;