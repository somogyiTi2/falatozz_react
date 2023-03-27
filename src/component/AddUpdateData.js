import { useState } from "react";

const AddUpdateData = (props) => {
    const [enteredName, setEnteredName] = useState(props.update.name);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const [enteredPiece, setEnteredPiece] = useState(props.update.piece);
    const [enteredPieceTouched, setEnteredPieceTouched] = useState(false);

    const [enteredDescription, setEnteredDescription] = useState(props.update.description);
    const [enteredDescriptionTouched, setEnteredDescriptionTouched] = useState(false);


    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;


    const enteredPieceIsValid = enteredPiece.trim() !== '';
    const pieceInputIsInvalid = !enteredPieceIsValid && enteredPieceTouched;

    const enteredDescriptionIsValid = enteredDescription.trim() !== '';
    const descriptionInputIsInvalid = !enteredDescriptionIsValid && enteredDescriptionTouched;

    let formIsValid = false;
    //minden változó igaz e, pl életkor név minden igaz e
    if (enteredNameIsValid && enteredPieceIsValid && enteredDescriptionIsValid) {
        formIsValid = true;
    }


    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };
    const pieceInputChangeHandler = event => {
        setEnteredPiece(event.target.value);
    };

    const descriptionInputChangeHandler = event => {
        setEnteredDescription(event.target.value);
    };

    //Blur funkció feladata, ha nem írunk be semmit csak tovább kattintuk hibát dob fel.
    const nameInputBlurHandler = event => {
        setEnteredNameTouched(true);
    };
    const pieceInputBlurHandler = event => {
        setEnteredPieceTouched(true);
    };

    const descriptionInputBlurHandler = event => {
        setEnteredDescriptionTouched(true);
    };

    const forSubmissionHandler = event => {
        event.preventDefault();
        //ez állítja azt,be hogy már működött-e egyszer a validáció
        if (!enteredNameIsValid) {
            return;
        }

        props.UpdateHandler({
            id: props.update.id,
            name: enteredName,
            description: enteredDescription,
            piece: enteredPiece,
        })
        setEnteredNameTouched(false);
        setEnteredPieceTouched(false);
        setEnteredDescriptionTouched(false);
    }

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
    const PieceenteredName = pieceInputIsInvalid ? 'form-control invalid' : 'form-control';
    const DescriptionenteredName = descriptionInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={forSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Néve:</label>
                <input type='text'

                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}

                    value={enteredName} />
            </div>
            {nameInputIsInvalid && <p className="error-text">Üres a név!</p>}

            <div className={DescriptionenteredName}>
                <label htmlFor='name'>Leírás:</label>
                <input type='text'

                    onChange={descriptionInputChangeHandler}
                    onBlur={descriptionInputBlurHandler}
                    value={enteredDescription}
                />
            </div>
            {descriptionInputIsInvalid && <p className="error-text">Üres a leírás!</p>}

            <div className={PieceenteredName}>
                <label htmlFor='name'>Darab:</label>
                <input type='number'
                    onChange={pieceInputChangeHandler}
                    onBlur={pieceInputBlurHandler}
                    value={enteredPiece}

                />
            </div>
            {pieceInputIsInvalid && <p className="error-text">Üres a darab!</p>}
            <div className="form-actions">
                <button onClick={props.onShow}>Mégse</button>
                <button disabled={!formIsValid}>Frissítés</button>
            </div>
        </form>
    );
};

export default AddUpdateData;
