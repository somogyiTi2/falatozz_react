import { useState } from 'react'

export const AddUpdateData = (props) => {

    const [enteredName, setEnteredName] = useState(props.update.name);
    const [eneteredDescription, setEneteredDescription] = useState(props.update.description);
    const [enteredPiece, setEnteredPiece] = useState(props.update.piece);
    
    function UpdateName(event) {
        setEnteredName(event.target.value);
    };

    function UpdateDescription(event) {
        setEneteredDescription(event.target.value);
    };

    function UpdatePiece(event) {
        setEnteredPiece(event.target.value);
    };

    const updateHandeler = (event) => {
        event.preventDefault();
        props.UpdateHandler({
            id: props.update.id,
            name: enteredName,
            description: eneteredDescription,
            piece: enteredPiece,
        })
    }

    return (
        <form>
            <p>
                <layer>Frissítendő neve:  <input type="text" onChange={UpdateName}
                    value={enteredName} /></layer>
            </p>
            <p>
                <layer>Frissítendő leírása: <input type="text" onChange={UpdateDescription} value={eneteredDescription} /></layer>
            </p> <p>
                <layer>Frissítendő darab: <input type="number" onChange={UpdatePiece} value={enteredPiece} /></layer>
            </p>
            <button onClick={props.onShow}>Mégse</button>
    
            <button onClick={updateHandeler}>Frissít</button>

        </form>
    )
}

export default AddUpdateData;