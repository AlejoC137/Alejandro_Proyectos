import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setVisitor, setLenguaje, getMaindefinitions } from '../../../redux/actions.js';
import styles from './Landing.module.css';

function Landing() {
    const dispatch = useDispatch();
    const [visitorName, setVisitorName] = useState('');
    const currentLenguaje = useSelector(state => state.currentLenguaje);

    useEffect(() => {
        dispatch(getMaindefinitions());
    }, []);  

    const onPressHandler = () => {
        // if (visitorName.trim() !== '') {
        dispatch(setVisitor(visitorName));
        // }
    };

    const lenguajeHandler = (len) => {
        // if (visitorName.trim() !== '') {
        dispatch(setLenguaje(len));
        // }
    };

    const handleNameChange = (event) => {
        setVisitorName(event.target.value);
    };

    // Función para traducir los textos según el idioma seleccionado
    const translateText = (textObj) => {
        return currentLenguaje === 'ES' ? textObj.es : textObj.en;
    };

    return (
        <>
            <div className="flex justify-end mb-4 mr-7 ">
                <button 
                    onClick={() => lenguajeHandler('ES')} 
                    className="text-black hover:text-pureRed"
                >
                    Español |
                </button>
                <button 
                    onClick={() => lenguajeHandler('EN')} 
                    className="text-black hover:text-pureRed ml-2"
                >
                    | English
                </button>
            </div>

            <br />

            <div className=" rounded-lg shadow-lg flex justify-center items-center bg-gray-100 bg-opacity-50 p-5 flex-col border-l-0 border-r-2 border-b-2 border-t-0 border-black ml-6 mr-6">
                <br />

                <h4 className="mb-4 border-black font-Montserrat font-bold text-4xl md:text-8xl flex flex-col text-center">
                    {translateText({
                        en: "I'm Alejandro Patiño, and I'm a designer...",
                        es: "Soy Alejandro Patiño, y soy un proyectista..."
                    })}
                </h4>

                <div className=" flex flex-col md:flex-row h-auto md:h-64">
                    <h3 className=" rounded-lg shadow-lg mb-4 mr-4 border-black border-l-0 border-r-2 border-b-2 border-t-0 pr-8 pl-8 pb-5 pt-5 text-sm md:text-pureRed md:text-lg md:w-1/2">
                        {translateText({
                            en: "Ideas constantly flood my mind, my experience provides me with the tools to plan the path, and my passion for learning invites me to engage in the execution process.",
                            es: "Las ideas me invaden constantemente, mi experiencia me brinda las herramientas para planificar el camino, y mi pasión por aprender me invita a involucrarme en el proceso de ejecución."
                        })}
                    </h3>
                    <h3 className=" rounded-lg shadow-lg mb-4 mr-4 border-black border-l-0 border-r-2 border-b-2 border-t-0 pr-8 pl-8 pb-5 pt-5 text-sm md:text-lg md:w-1/2">
                        {translateText({
                            en: "On this website, you will find a compilation of the projects I have worked on, projects currently in development, and my contact information if you wish to get in touch.",
                            es: "En esta página web encontrarás un compilado de los proyectos en los que he trabajado, proyectos actualmente en desarrollo y mi información de contacto en caso de que desees comunicarte conmigo."
                        })}
                    </h3>
                </div>

                <div className="flex flex-col md:flex-row h-auto md:h-64">
                    <div className="mb-4 mr-4  pr-8 pl-8 pb-5 pt-5 text-sm md:text-lg md:w-1/2">
                        {/* <label htmlFor="visitorName" className="block mb-4">{translateText({
                            en: "Your Name",
                            es: "Tu Nombre"
                        })}</label>
                        <input
                            type="text"
                            id="visitorName"
                            value={visitorName}
                            onChange={handleNameChange}
                            className="block w-full border border-gray-300 rounded px-4 py-2 mb-4 mr-2"
                        /> */}
                        <Link to='/home'>
                            <li className="font-bold text-8xl flex flex-col">
                                <button className="hover:text-pureRed font-Montserrat font-bold text-6xl flex flex-col italic">
                                    <span style={{ fontFamily: "Nunito" }}>
                                        ap
                                        {/* {specialHi==="" ? normalHi : specialHi} */}
                                        {/* Att: {mainProfile.profileNickName ? mainProfile.profileNickName : ''} */}
                                    </span>
                                </button>
                            </li>
                        </Link>

                        <Link to="/home">
                            <button onClick={onPressHandler} className="text-black hover:text-pureRed  text-sm">
                                {translateText({
                                    en: "ENTER",
                                    es: "INGRESAR"
                                })}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
