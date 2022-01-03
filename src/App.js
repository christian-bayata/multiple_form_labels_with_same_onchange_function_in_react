import React, { useState, useEffect } from 'react';

const ControlledInputs = () => {
    const [person, setPerson] = useState({
        firstName: "",
        email: "",
        age: ""
    });
    const [people, setPeople] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(person.firstName && person.email && person.age) {
            const newPerson = {...person, id: new Date().getTime().toString()};
            setPeople([...people, newPerson]);
            setPerson({firstName: "", email: "", age: ""});
        }
    };

    return <>
        <article>
            <form className="form">
                <div className="form-group">
                    <label htmlFor="firstName">Name: </label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={person.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        value={person.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age: </label>
                    <input 
                        type="text" 
                        id="age" 
                        name="age" 
                        value={person.age}
                        onChange={handleChange}
                    />
                </div>
                <button className="btn" onClick={handleSubmit}>Add Person</button>
            </form>
            {people.map(person => {
                const {id, firstName, age, email} = person;
                return(
                    <div className="list-people" key={id}>
                        <h2>{firstName}</h2>
                        <p>{age}</p>
                        <p>{email}</p>
                    </div>
                )
            })} 
        </article>
    </>
};

export default ControlledInputs