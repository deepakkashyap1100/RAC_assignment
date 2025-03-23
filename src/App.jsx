
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppLayout from './Layout/AppLayout';
import ErrorComp from './Components/ErrorComp';
import Home from './Pages/Home';
// import About from './Pages/About';
// import Projects from './Pages/Services';
import OurProduct from './Pages/OurProduct';
import AluminumProfile from './Pages/AluminumProfile';
import { getApi } from './API/GetApi';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      errorElement: <ErrorComp/>,
      children: [
        {
          path: '/',
          element: <Home /> 
        },
        {
          path: '/about',
          element: <AluminumProfile />
        },
        {
          path: '/ourproduct',
          element: <OurProduct />,
          loader: getApi
        },
        {
          path: '/aluminum',
          element: <AluminumProfile />
        },
 
        // {
        //   path: '/contact',
        //   element: <Contact />,
        //   action: contactFormData 
        // }
      ]
    },

  ]);
  return (<RouterProvider 
    router={router} future={{v7_startTransition: true, }} 
  />

) 
}

export default App
