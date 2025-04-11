import React from 'react'
import './home.css'
import ShowImg from '../../components/showimg/ShowImg'
import About_us from '../../components/about_us/About_us'
import RequirementForm from '../../components/requirementForm/RequirementForm'
import Review from '../../components/review/Review'
function Home() {
  return (
   <>
        <ShowImg/>
        <Review/>
        {/* <RequirementForm/> */}
        {/* <About_us/> */}
   </>
  )
}

export default Home