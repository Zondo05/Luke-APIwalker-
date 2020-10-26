import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate} from "@reach/router";

import HomeWorld from "./HomeWorld";

const People =(props, { id })  => {
    const [people, setPeople] = useState (null);


    useEffect(() => {
        axios.get("https://swapi.py4e.com/api/people/" + props.id + "/")
        .then(response => {
            setPeople(response.data);
        })
        .catch(() => navigate("/error"));
    }, [ props.id ])

    if (people == null) {
        return <h4>Loading...</h4>
    }

    return (
        <div className="show">
            <h1>{people.name}</h1>
            <HomeWorld url = {people.homeworld} />
            <p>Height: {people.height}</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>Eye Color: {people.eye_color}</p>
            <p>Skin Color: {people.skin_color}</p>
        </div>
    );
}

export default People
