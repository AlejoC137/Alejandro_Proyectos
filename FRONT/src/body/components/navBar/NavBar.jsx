import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './NavBar.module.css';
import {
  CODE,
  SOCI,
  ARCH,
  ALE,
} from "../../../redux/actions-types.js";
import { getAllProjects, setNavBarOption } from "../../../redux/actions.js";




export default function NavBar() {
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.userAuth);
  const [userInfo, setUserInfo] = useState(false);
  const Visitor = useSelector(state => state.visitorData);
  const navBarOption = useSelector(state => state.navBarOption);


  const handleOnClick = (e) => {

dispatch(setNavBarOption(e))
// console.log(e;

  }

  return (
    <nav className=" ml-4" 
    >
     
        
        
     <ul >

<br></br>


            {/* <Link to={`/aboutUs`} className='w-64'> */}
            <li className={navBarOption == SOCI ? styles.hatch1 : styles.hatch2}>
                <button
                className=" border-pureRed   border-4    w-64 p-2"
                onClick={()=>{handleOnClick(SOCI)}}

                >
                <div
                className="font-Montserrat font-bold text-8xl flex flex-col">
                ACT
                </div>
                <div className="font text-2xl flex flex-col">
                 ACTIVISMO
                </div>
                </button>
              </li>
            {/* </Link> */}

<br></br>

            {/* <Link to={`/aboutUs`}> */}
            <li className={navBarOption == ARCH ? styles.hatch1 : styles.hatch2}>
                <button
                className=" border-pureRed   border-4    w-64 p-2"
                onClick={()=>{handleOnClick(ARCH)}}

                >
                <div
                className="font-Montserrat font-bold text-8xl flex flex-col">
                  ARQ
                </div>
                <div className="font-Montserrat  text-2xl flex flex-col">
                  ARQUITECTURA
                </div>
                </button>
              </li>
            {/* </Link> */}

<br></br>


            {/* <Link to={`/aboutUs`}> */}
            <li className={navBarOption == CODE ? styles.hatch1 : styles.hatch2}>
                <button
                className=" border-pureRed   border-4    w-64 p-2"
                onClick={()=>{handleOnClick(CODE)}}


                >
                <div
                className="font-Montserrat font-bold  text-8xl flex flex-col">
                  DEV
                </div>
                <div className="font-Montserrat text-2xl flex flex-col">
                  DESARROLLO
                </div>
                </button>
              </li>
            {/* </Link> */}

      

          </ul>

    </nav>
  );
}
