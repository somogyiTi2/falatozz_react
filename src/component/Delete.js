import React from 'react';

export const Delete = (props) => {

    const DeleterHandler = async (proba) => {
        await fetch(`https://react-http-70f07-default-rtdb.firebaseio.com/falatozz/` + props.delete.id + '.json', { method: 'DELETE' })
        console.log('delete', proba.delete);
       window.location.reload();
    } 

    return (
        <>
            <p>{props.delete.name}</p>
            <button onClick={props.onShow}>Mégse</button>
            <button onClick={() => DeleterHandler(props.delete.id)}> Biztos törlés </button>
          
        </>
    )
}

export default Delete;