/*
  File name : About.jsx 
  Student’s Name : Wai Lung Chan 
  StudentID : 301325509 
  Date : 26-May-2024
*/

import selfImage from '../assets/photo.jpg';
import classes from './About.module.css';

/*
  Section Header
  Export function About to render the about me page
*/
export default function About() {
  return (
    <main>
      <img src={selfImage} alt="my photo" className={classes.myphoto}/>
      <h2>About Myself</h2>
      <p>
        Hello, my name is Wai Lung Chan. I am a student at Centennial College studying Software Engineering Technician.
        I am currently in my third semester and will be graduating at the end of 2024.
      </p>
      <h2>My Resume</h2>
      <a href="http://studentweb.cencol.ca/wchan194/resume.pdf" target="_blank">Download</a>
    </main>
    
  )
}
