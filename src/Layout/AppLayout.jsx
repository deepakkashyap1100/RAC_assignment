import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer';

const AppLayout = () => {
    const loadingNavigation= useNavigation();
    if(loadingNavigation.state=== 'loading'){
      return(<Loading/>)
    }

  return (
    <>
    <Header/> 
    <Outlet/>    
    <Footer/>
</>
  )
}

export default AppLayout