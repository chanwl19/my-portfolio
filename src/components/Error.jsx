/*
  File name : Error.jsx 
  Student’s Name : Wai Lung Chan 
  StudentID : 301325509 
  Date : 26-May-2024
*/

import MainNavigation from "./MainNavigation";
import classes from './Error.module.css'
import  { NavLink } from 'react-router-dom'

/*
  Section Header
  Export function Error to render the error page
*/
export default function Error({title, errorMsg}) {
  return (
    <>
        <MainNavigation />
        <div className={classes.content}>
            <h1>{title}</h1>
            <p>{errorMsg}<NavLink to="/">Home</NavLink></p>
        </div>
    </>
  )
}
