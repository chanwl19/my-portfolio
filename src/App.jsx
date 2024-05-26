/*
  File name : App.jsx 
  Student’s Name : Wai Lung Chan 
  StudentID : 301325509 
  Date : 26-May-2024
*/

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Root from './components/Root';
import Error from './components/Error';

/*
  Section Header
  Export function App to render the App 
*/
function App() {
  const title="An error occurs";
  const errorMsg="Error when loading the page please go back to ";
  const router = createBrowserRouter([
    {path: '', 
     element: <Root />,
     errorElement: <Error title={title} errorMsg={errorMsg}/>,
     children:[
      {index: true, element: <Home /> },
      {path: 'about', element: <About />, exact: true},
      {path: 'projects', element: <Projects />, exact: true},
      {path: 'services', element: <Services />, exact: true},
      {path: 'contact', element: <Contact />, exact: true},
     ]
    },
    
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App


