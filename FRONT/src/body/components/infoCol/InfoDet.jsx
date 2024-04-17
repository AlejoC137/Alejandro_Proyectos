// InfoDet.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './InfoCol.module.css';
import { getMainProfile } from "../../../redux/actions.js";
import { CODE, SOCI, ARCH, ALE } from "../../../redux/actions-types.js";

export default function InfoDet(props) {
    const dispatch = useDispatch();
    useEffect(() => {

    }, []);

    const MenuBarOption = useSelector(state => state.MenuBarOption);
    const mainProfile = useSelector(state => state.mainProfile);

    return (
        <div className="flex flex-col justify-between mt-6 
        h-120 
        "> {/* Utiliza tu nueva clase personalizada aquí */}
            <div className="ml-6 border-r-2 border-black flex-1 w-96 p-2 overflow-y-auto">
                {props.data.projectName}
            </div>
        </div>
    );
}
