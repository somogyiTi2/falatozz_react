import React from 'react'

export const Card = (props) => {
  return (
    <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <h3>{props.piece} DB</h3>
        </div>
  )
}

export default Card;