import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CourseList from './pages/CourseList'
import YoutuberList from './pages/YoutuberList'
import RoadmapPage from './pages/RoadmapPage'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course-list" element={<CourseList />} />
          <Route path="/youtuber-list" element={<YoutuberList />} />
          <Route path="/roadmap/:id" element={<RoadmapPage />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App