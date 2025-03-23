import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer';
import Loading from './Loading';

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