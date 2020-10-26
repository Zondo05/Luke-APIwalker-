import React, { useState } from 'react';
import { navigate } from "@reach/router";

const SearchBar =(props, { id })  => {
    const [formState, setFormState] = useState ({
        options: "people",
        id: ""
    });

    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        navigate ("/" + formState.option + "/" + formState.id)
    }

    return (
        <div className="container">

            <h1>Welcome Star Wars Fans</h1>

            <form className="form-inline" onSubmit = {onSubmitHandler}>
                <label>Search for:</label>
                <select className="form-control"
                name="option"
                value={formState.option} onChange={onChangeHandler}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
                <label>ID:</label>
                <input className="form-control" name="id" placeholder="Enter an I.d number" value={formState.id} onChange={onChangeHandler} />
                <button className="btn btn-primary">Search</button>
            </form>

        </div>
    )

}
export default SearchBar
