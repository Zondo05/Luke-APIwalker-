import React, { useState, useEffect } from 'react';
import axios from 'axios';


const HomeWorld =({ url })  => {
    const [homeworld, setHomeWorld] = useState ({});

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setHomeWorld(response.data);
        })
        .catch(console.log);
    }, [ url ]);

    return(
        <div>
            <p>Home World: {homeworld.name}</p>
        </div>
    )

}

export default HomeWorld