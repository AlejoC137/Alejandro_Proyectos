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
        <div className="flex justify-center items-center h-screen bg-gray-100 bg-opacity-50">
            <div className="bg-white p-8 border border-gray-300 rounded-lg">
                <label htmlFor="visitorName" className="block mb-4">Tu Nombre - Your Name</label>
                <input
                    type="text"
                    id="visitorName"
                    value={visitorName}
                    onChange={handleNameChange}
                    className="block w-full border border-gray-300 rounded px-4 py-2 mb-4"
                />
                <Link to="/home">
                    <button onClick={onPressHandler} className="block w-full bg-blue-500 text-white rounded px-4 py-2">
                        IR - GO
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Landing;
