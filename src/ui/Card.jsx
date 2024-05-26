/*
  File name : Card.jsx 
  Student’s Name : Wai Lung Chan 
  StudentID : 301325509 
  Date : 26-May-2024
*/

import classes from './Card.module.css';

/*
  Section Header
  Export function for Card UI
*/
function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;