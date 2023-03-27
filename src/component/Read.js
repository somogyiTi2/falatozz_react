import React from 'react';
import Card from './Card';
import classes from './Read.module.css'

import {useState, useEffect } from 'react';

// const DummyData = [
//     { id: 1, name: "Shake and expresso", description: "These is a description", piece: 20 },
//     { id: 2, name: "Orange", description: "Orange is orange", piece: 10 },
//     { id: 3, name: "Apple", description: "Newton loves Apple", piece: 5 },
// ];

export const Read = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'https://react-http-70f07-default-rtdb.firebaseio.com/falatozz.json'
            );

    

            const responseData = await response.json();

            const loadedData = [];

            for (const key in responseData) {
                loadedData.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    piece: responseData[key].piece,
                });
            }
            setData(loadedData);

        };

        fetchData();

    }, []);
    
console.log(data);

    return (
        <>
            <div className={classes.cards}>
                {data.map((data) => <>
                    <Card
                        key={data.id}
                        name={data.name}
                        description={data.description}
                        piece={data.piece} />
                </>)}
            </div>
        </>


    )

}

export default Read;