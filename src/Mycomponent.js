import React, { useState, useEffect } from 'react'
import './Mycomponent.css';
import axios from 'axios';
// import requests from './Request';





function Mycomponent() {
    const [username,setUsername] = useState("");
    const [description,setDescription] = useState("");
    const [duration,setDuration] = useState("");


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get("http://localhost:8080/exercises");
            setUsername(request.data[1].username);
            setDescription(request.data[1].description);
            setDuration(request.data[1].duration);
            return request;
        }

        fetchData();
    }, []);





    return (
        <div className="myComp">
            <div className="myCompContent">
                <h1 className="myHeading">I am the heading</h1>
                <h1 className="myCompUsername">My username is = {username}</h1>
                <h1 className="myCompDesc">{description}</h1>
                <h1 className="myCompDuration">{duration}</h1>
            </div>
        </div>
    )
}

export default Mycomponent
