import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link component
import PercheroComp from '../percheroComp/PercheroComp'
import styles from './LengOptions.module.css'; // Import CSS module
import { useDispatch, useSelector } from "react-redux";
import { setLenguaje } from "../../../redux/actions";
import FormWifi from "../formWifi/FormWifi";

function LengOptions() {

    const [showBanner, setShowBanner] = useState(true);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLenguaje('ES') )
    }, [/* Dependencies */]);


    const onPressHandler = (SET) => {
        // Dispatch action
        dispatch(setLenguaje(SET));
    };

    const currentLenguaje = useSelector(state => state.currentLenguaje);

    return (
        <div className={styles.centerColumn}>
            <PercheroComp 
                className={styles.percheroElement}
                src="https://res.cloudinary.com/denjiview/image/upload/v1710822553/Untitled-1-02_zml2ay.png" 
                alt="Your Image Alt Text" 
                imageWidth="40px"
            />
            <Link to="/menuprojectocafe"> {/* Use Link component */}
                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://res.cloudinary.com/denjiview/image/upload/v1710822094/PERCHERO_02-01_mvlvyz.png" 
                    alt="Your Image Alt Text" 
                    buttonText={"ESPAÑOL"}
                    value='ES'
                    onClick={()=>{
                        dispatch(setLenguaje('ES'))
                    }}
                    imageWidth="40px"
                />
            </Link>
            <Link to="/menuprojectocafe"> {/* Use Link component */}
                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://res.cloudinary.com/denjiview/image/upload/v1710822094/PERCHERO_02-01_mvlvyz.png" 
                    alt="Your Image Alt Text" 
                    buttonText={"ENGLISH"}
                    value='EN'
                    onClick={()=>{
                        dispatch(setLenguaje('EN'))
                    }}
                    imageWidth="40px"
                />
                              
            </Link>

                {/* <PercheroComp 
                    // className={styles.singUpElement}
                    src="https://res.cloudinary.com/denjiview/image/upload/v1710996709/PERCHERO_02-02_g4pqcy.png" 
                    alt="Your Image Alt Text" 
                    // buttonText={                               }
                    value='EN'
                    // onClick={()=>{
                    //     dispatch(setLenguaje('EN'))
                    // }}
                    imageWidth="40px"
                >
                     
                     
                </PercheroComp> */}
                              

                {/* <FormWifi/> */}
                {showBanner && (
    <div className={`${styles.popup} max-w-sm p-3 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700`}>
        <button onClick={() => setShowBanner(false)}>❌</button>
        <div>
            <h2>¡Bienvenid@ a Proyecto Café!</h2>
            <p>
                Horario de Semana Santa:<br></br>
                <br></br>
                Domingo 31:   8:00am - 2:00pm <br></br>
                <br></br>
                Lunes 24:     8:00am - 7:30pm <br></br>
                <br></br>
                Martes 25:   8:00am - 7:30pm <br></br>
                <br></br>
                Miercoles 26: 2:00pm - 8:30pm <br></br>
                <br></br>
                Jueves 27:    2:00pm - 8:30pm <br></br>
                <br></br>
                Viernes 28:   8:00am - 7:30pm <br></br>
                <br></br>
                Sabado 29:    8:00am - 7:30pm <br></br>
                <br></br>
                Domingo 30:   8:00am - 7:30pm <br></br>
            </p>
        </div>
    </div>
)}


        </div>
    );
}

export default LengOptions;
