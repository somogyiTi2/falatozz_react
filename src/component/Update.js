import React from 'react';
import AddUpdateData from './AddUpdateData';


export const Update = (props) => {
  
    /*UPDATE */
    let UpdateHandler = async (props) => {
        await fetch("https://react-http-70f07-default-rtdb.firebaseio.com/falatozz/" + props.id + ".json", {
            method: "PATCH",
            body: JSON.stringify({
                name: props.name,
                description: props.description,
                piece: props.piece,
            })
        }
        )
        window.location.reload();
    }

    return (
        <>
            <h1>Frissítés</h1>
            <AddUpdateData update={props.update} UpdateHandler={UpdateHandler} onShow={props.onShow} />
        </>
    )
}

export default Update;