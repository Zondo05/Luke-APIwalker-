import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate} from "@reach/router";

const Starships =(props, { id })  => {
    const [starships, setStarship] = useState (null);


    useEffect(() => {
        axios.get("https://swapi.py4e.com/api/starships/" + props.id + "/")
        .then(response => {
            setStarship(response.data);
        })
        .catch(() => navigate("/error"));
    }, [ props.id ])

    if (starships == null) {
        return <h4>Loading...</h4>
    }

    return (
        <div className="show">
            <h1>{starships.name}</h1>
            <p>Model: {starships.model}</p>
            <p>Class: {starships.starship_class}</p>
            <p>Manufacturer: {starships.manufacturer}</p>
            <p>Cost: {starships.cost_in_credits} Credits</p>
        </div>
    );
}

export default Starships
