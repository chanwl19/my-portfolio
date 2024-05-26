/*
  File name : Services.jsx 
  Student’s Name : Wai Lung Chan 
  StudentID : 301325509 
  Date : 26-May-2024
*/

import Card from "../ui/Card"
import { services } from '../data';
import classes from './Services.module.css'

/*
  Section Header
  Export function Services to render the services page
*/
export default function Services() {
  return (
    <>
      <h2>Service Provide</h2>
      {services.map(service =>{ 
        return (
          <Card key={service.service}>
            <p>{service.service}</p>
            <div>
              {service.images.map(image => {
                return (
                  <img src={image} alt="service image" className={classes.servceImg}/>  
                )
              })}
            </div>
          </Card>
        )
      })}
    </>
  )
}
