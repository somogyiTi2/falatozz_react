import React from 'react';
import AddCreateData from './AddCreateData'

export const Create = (props) => {
  const postMethod = async (props) => {
    await fetch('https://react-http-70f07-default-rtdb.firebaseio.com/falatozz.json', {
      method: 'POST',
      body: JSON.stringify({
        id: Math.random(),
        name: props.name,
        description: props.description,
        piece: props.piece,
      })
    
    }
   );
   window.location.href = "/";
  }


  return (
    <>
      <hr />
        <h1>Új termék hozzá adása:</h1> 
      <AddCreateData onConfirm={postMethod} /> 
    
      <hr />
    </>
  )
}
export default Create;
