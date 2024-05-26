/*
  File name : Home.jsx 
  Student’s Name : Wai Lung Chan 
  StudentID : 301325509 
  Date : 26-May-2024
*/

import { NavLink } from 'react-router-dom';

/*
  Section Header
  Export function Home to render the Home page
*/
export default function Home() {
  return (
    <>
      <main>
        <h2>
          Hello, Welcome to my portfolio website!
        </h2>
        <p>I am a passionate software developer with a strong focus on delivering innovative and user-friendly solutions. 
           I have a proven track record of success in developing and maintaining high-quality software applications.</p>
        <h2>Mission Statement</h2>
        <p>
          My mission is to provide exceptional software development services to my clients, delivering high-quality, innovative, 
          and reliable solutions that meet their unique needs and exceed their expectations.
        </p>
        <NavLink to="/about">About Me</NavLink>
      </main>
    </>
  )
}
