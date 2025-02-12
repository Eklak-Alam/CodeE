import React from 'react'
import Hero from '../components/Hero'
import Youtubers from '../components/Youtubers'
import CourseSection from '../components/CourseSection'

const Home = () => {
  return (
    <>
      <div className='bg-slate-100 flex flex-col items-center space-y-7 text-center h-full'>
        <Hero />
        <CourseSection />
        <Youtubers />
      </div>
    </>
  )
}

export default Home