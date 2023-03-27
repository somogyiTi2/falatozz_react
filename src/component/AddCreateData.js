import React, { useState, useRef } from 'react'


const isEmpty = (value) => value.trim() === '';
const isZero = (value) => value > 0;

export const AddCardData = (props) => {
    const nameInputRef = useRef();
    const pieceInputRef = useRef();
    const descriptionInputRef = useRef();

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        description: true,
        piece: true,
    })

    const confirmHandler = (event) => {
        event.preventDefault();
        //Beléptet (valószínü a fügvényve behozza az értéket)
        const enteredName = nameInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredPiece = pieceInputRef.current.value;

        //validálók:
        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredDescriotionIsValid = !isEmpty(enteredDescription);
        const enteredPieceIsValid = isZero(enteredPiece);
        //validált true, false

        setFormInputsValidity({
            name: enteredNameIsValid,
            description: enteredDescriotionIsValid,
            piece: enteredPieceIsValid,
        });
        //az egészet ellenörzi hogy igaz e
        const formIsValid =
            enteredNameIsValid &&
            enteredPieceIsValid;
        //ha nem igaz minden akkor nem ad vissza értéket
        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            description: enteredDescription,
            piece: enteredPiece,
        });


    };

    return (

                <form onSubmit={confirmHandler}>
                    <p>Termék neve:
                        <input
                            type='text'
                            placeholder='Név'
                            ref={nameInputRef}
                        />
                        {!formInputsValidity.name && <p>Kérem töltse ki</p>}
                    </p>
                    <p>Leírása:
                        <input
                            type='text'
                            placeholder='Leírás'
                            ref={descriptionInputRef}
                        ></input></p>
                    {!formInputsValidity.description && <p>Kérem töltse ki</p>}
                    <p>Darab:
                        <input
                            type='number'
                            placeholder='Darab'
                            ref={pieceInputRef}
                        ></input></p>
                    {!formInputsValidity.piece && <p>Kérem töltse ki vagy legyen az érték nagyobb 0 nál.</p>}
                   
                    <button type='submit'> Küldés </button>
                </form>

      
    )
}

export default AddCardData;