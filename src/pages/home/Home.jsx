import React from 'react'
import TopNavBar from '../../components/TopNavBar/TopNavBar'
import InfoSection from '../../components/InfoSection/InfoSection'
import ProjectSection from '../../components/ProjectSection/ProjectSection'
import { QueueTabs } from '../../components/TabsSection/QueueTabs'

function Home({isDrawerOpen}) {
  return (
    <div>
        <InfoSection/>
        <ProjectSection/>
        <QueueTabs/>
    </div>
  )
}

export default Home