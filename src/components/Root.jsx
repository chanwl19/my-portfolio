/*
  File name : Root.jsx 
  Student’s Name : Wai Lung Chan 
  StudentID : 301325509 
  Date : 26-May-2024
*/

import { Outlet } from "react-router-dom"
import MainNavigation from "./MainNavigation";

/*
  Section Header
  Export function Root to render the root page
*/
export default function Root() {

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  )
}
