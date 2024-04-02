import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setVisitor } from '../../../redux/actions.js';

function Landing() {
    const dispatch = useDispatch();
    const [visitorName, setVisitorName] = useState('');

    const onPressHandler = () => {
        if (visitorName.trim() !== '') {
            dispatch(setVisitor(visitorName));
        }
    };

    const handleNameChange = (event) => {
        setVisitorName(event.target.value);
    };

    return (
        <div>
            <label htmlFor="visitorName">Tu Nombre - Your Name</label>
            <input
                type="text"
                id="visitorName"
                value={visitorName}
                onChange={handleNameChange}
            />
            <Link to="/home">
                <button onClick={onPressHandler}>IR - GO</button>
            </Link>
        </div>
    );
}

export default Landing;
