import React from "react";
import "./PercheroComp.css"; // Import CSS file for styling

function PercheroComp({ src, alt, buttonText, onClick }) {
    return (
        <button className="image-button" onClick={onClick}>
            <img className="image-perchero" src={src} alt={alt} />
            <span className="button-text" 
            style={{ fontFamily: 'ProyectoCafe2-Regular' }
            }>{buttonText}</span>
        </button>
    );
}

export default PercheroComp;