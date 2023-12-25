import React from 'react';
import { lazy, Suspense  } from 'react';
import Body from './Body';
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';
import Outline from './Outline';
import { RouterProvider, createBrowserRouter }from 'react-router-dom';
import VideoContainer from './VideoContainer';
import { BiLoaderCircle } from "react-icons/bi";
const WatchPage = lazy(() => import('./WatchPage'));

const Layout = () => {

  const appRouter = createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<VideoContainer/>
      },
      {
        path:"watch",
        element: (
          <Suspense fallback={<div className='flex items-center w-screen justify-center h-screen'><BiLoaderCircle size={70} color='yellow' /></div>}>
            <WatchPage />
          </Suspense>
        )
      }
    ]
  }])
  return (
    <Provider store={appStore} >
    <div>
        <Outline/>
        <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  )
}

export default Layout;