import React from 'react'
import Nav from '../../components/sidebar/Sidebar'
import TrainingList from '../../components/TrainingList/TrainingList'


const TrainingListPage = () => {
  return (
    <div className="flex">
    <div className="w-1/6"> {/* Set the width as needed */}
      <Nav />
    </div>
    <div className="flex-1  md:px-40">
      <TrainingList/>
    </div>
  </div>
  )
}

export default TrainingListPage
