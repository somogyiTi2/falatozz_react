import React from 'react';
import Card from './Card';

const DummyData = [
    { id: 1, name: "Shake and expresso", description: "These is a description", piece: 20 },
    { id: 2, name: "Orange", description: "Orange is orange", piece: 10 },
    { id: 3, name: "Apple", description: "Newton loves Apple", piece: 5 },
];

export const Read = () => {
    return (
        <>
            {DummyData.map((data) => <>
                <Card
                    key={data.id}
                    name={data.name}
                    description={data.description}
                    piece={data.piece} />
            </>)}
        </>


    )

}

export default Read;