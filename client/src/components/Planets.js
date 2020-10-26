import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate} from "@reach/router";

const Planets =(props, { id })  => {
    const [planets, setPlanet] = useState (null);


    useEffect(() => {
        axios.get("https://swapi.py4e.com/api/planets/" + props.id + "/")
        .then(response => {
            setPlanet(response.data);
        })
        .catch(() => navigate("/error"));
    }, [ props.id ])

    if (planets == null) {
        return <h4>Loading...</h4>
    }

    return (
        <div className="show">
            <h1>{planets.name}</h1>
            <p>Climate: {planets.climate}</p>
            <p>Terrain: {planets.terrain}</p>
            <p>Surface Water: {planets.surface_water}</p>
            <p>Population: {planets.population}</p>
        </div>
    );
}

export default Planets
