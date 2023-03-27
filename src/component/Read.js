import React from 'react';
import Card from './Card';
import classes from './Read.module.css'
import Update from './Update';
import Delete from './Delete';

import { useState, useEffect } from 'react';

export const Read = () => {
    const [data, setData] = useState([]);

    const [UpdateWindow, setUpdateWindow] = useState('');
    const [DeleteWindow, setDeleteWindow] = useState('');

    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'https://react-http-70f07-default-rtdb.firebaseio.com/falatozz.json'
            );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
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
            setIsLoading(false);
        };
        fetchData().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });

    }, []);

    if (isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
      }

      if (httpError) {
        return (
          <section >
            <p>{httpError}</p>
          </section>
        );
      }
    

    const closeUpdateWindow = () => {
        setUpdateWindow('');
    }

    const opernUpdateWindow = (props) => {
        setUpdateWindow(props);
    }
    const opernDeleteWindow = (props) => {
        setDeleteWindow(props);
    }

    const closeDeleteWindow = () => {
        setDeleteWindow('');
    }

    return (
        <>
            <div className={classes.cards}>
                {data.map((data) => <>
                    <Card
                        key={data.id}
                        name={data.name}
                        description={data.description}
                        piece={data.piece}
                        update={() => opernUpdateWindow(data)}
                        delete={() => opernDeleteWindow(data)}
                    />

                </>)}
            </div>

            {UpdateWindow === '' ? '' : <>
                <div className="windowback">
                    <div className="window">
                        <Update update={UpdateWindow} onShow={closeUpdateWindow} />
                    </div>
                </div>
            </>}
            {DeleteWindow === '' ? '' : <>
                <div className="windowback">
                    <div className="window">
                        <h1>Biztos Törlöd?</h1>
                        <Delete delete={DeleteWindow} onShow={closeDeleteWindow} />

                    </div>
                </div>
            </>}
        </>
    )

}

export default Read;