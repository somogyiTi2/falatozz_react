import React from 'react';
import classes from './Card.module.css';

export const Card = (props) => {
  return (
    <div className={classes.card}>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>
      <button></button>
      {props.piece} DB
      <button></button></p>
    </div>
  )
}

export default Card;