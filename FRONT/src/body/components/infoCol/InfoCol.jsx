import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './InfoCol.module.css';
import { getMainProfile } from "../../../redux/actions";
import { CODE, SOCI, ARCH, ALE } from "../../../redux/actions-types.js";

export default function InfoCol() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMainProfile());
    }, []);

    const MenuBarOption = useSelector(state => state.MenuBarOption);
    const mainProfile = useSelector(state => state.mainProfile);

    let infoToDisplay = '';

    switch (MenuBarOption) {
        case SOCI:
            infoToDisplay = mainProfile.definition[0].soci;
            break;
        case ARCH:
            infoToDisplay = mainProfile.definition[0].arch;
            break;
        case CODE:
            infoToDisplay = mainProfile.definition[0].code;
            break;
        default:
            break;
    }

    return (
        <div className="flex flex-col justify-between mt-6">
            {/* <br /> */}
            <div className="border-pureRed ml-6 border-4 flex-1 w-80 p-2 overflow-y-auto">
                {infoToDisplay}
            </div>
            {/* <br /> */}
        </div>
    );
}
