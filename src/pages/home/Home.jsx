import React from 'react'
import TopNavBar from '../../components/TopNavBar/TopNavBar'
import InfoSection from '../../components/InfoSection/InfoSection'
import ProjectSection from '../../components/ProjectSection/ProjectSection'

function Home() {
  return (
    <div>
        <TopNavBar/>
        <InfoSection/>
        <ProjectSection/>
    </div>
  )
}

export default Home