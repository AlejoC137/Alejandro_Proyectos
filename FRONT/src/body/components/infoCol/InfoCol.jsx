import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './InfoCol.module.css';
export default function InfoCol
() {
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.userAuth);
  const [userInfo, setUserInfo] = useState(false);
  const [active, setActive] = useState('arch');
  const Visitor = useSelector(state => state.visitorData);
  

  return (
    <nav 
    >
<br></br>
     
        
        
     <ul >

            
            {/* <Link to={`/aboutUs`} className='w-64'> */}
            <li className={active == 'ale' ? styles.hatch1 : styles.hatch2}>
                <button
                className=" border-pureRed   border-4    w-64 p-2"
                onClick={()=>{setActive('ale')}}

                >
                <div
                className="font-Montserrat font-bold text-8xl flex flex-col">
                ALE
                </div>
                <div className="font text-2xl flex flex-col">
                 HOLA, {`${Visitor}`}
                </div>
                </button>
              </li>
            {/* </Link> */}

<br></br>


            {/* <Link to={`/aboutUs`} className='w-64'> */}
            <li className={active == 'soci' ? styles.hatch1 : styles.hatch2}>
                <button
                className=" border-pureRed   border-4    w-64 p-2"
                onClick={()=>{setActive('soci')}}

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
            <li className={active == 'arch' ? styles.hatch1 : styles.hatch2}>
                <button
                className=" border-pureRed   border-4    w-64 p-2"
                onClick={()=>{setActive('arch')}}

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
            <li className={active == 'code' ? styles.hatch1 : styles.hatch2}>
                <button
                className=" border-pureRed   border-4    w-64 p-2"
                onClick={()=>{setActive('code')}}
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
