// import React from 'react'
import About from './About';
import Services from './Services';
// import Contact from './Contact';
import Hero from './Hero';
import RecentWork from './RecentWork';
import CTA from './CTA';
import OurLocation from './OurLocation'; 
const Home = () => {
  return (
    <>
      <Hero/>
      <About />
      <Services /> 
      <RecentWork/>
      <CTA/>
      <OurLocation/> 
    </>
  )
}
export default Home