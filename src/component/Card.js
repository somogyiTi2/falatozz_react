import React from 'react';
import classes from './Card.module.css';

export const Card = (props) => {
  return (
    <div className={classes.card}>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>
      <h1 onClick={props.update}>✏️</h1>
      {props.piece} DB
      <h1 onClick={props.delete}>🚮</h1></p>
    </div>
  )
}

export default Card;