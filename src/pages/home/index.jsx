import React from 'react'
import TechStackGrid from '../../pages/techcard/techstackgrid'
import ServicesGrid from '../../pages/services/servicegrid'
import WorkGrid from '../../pages/work/workgrid'
import ProjectGrid from '../../pages/project/projectgrid'
import ChoseGrid from '../../pages/choseus/chosegrid'
import ContactPage from '../../pages/contact/contact'
import HomeVedioPage from './homevedio'

const Home = () => {
  return (
    <div>

      {/* Home Video Section */}
     <HomeVedioPage/>
      
    {/* StackCard */}
    <TechStackGrid/> 
    {/* services card */}
    <ServicesGrid/>
    {/* work card */}
    <WorkGrid/>
    {/* product card */}
    <ProjectGrid/>
    {/* chose card */}
    <ChoseGrid/>
    {/* contact */}
    <ContactPage/>
    {/* footer */}
    </div>
  )
}

export default Home