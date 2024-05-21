import MainNavigation from "./MainNavigation";
import classes from './Error.module.css'
import  { NavLink } from 'react-router-dom'

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
