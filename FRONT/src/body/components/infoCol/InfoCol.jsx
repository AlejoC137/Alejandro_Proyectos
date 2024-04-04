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
  const navBarOption = useSelector(state => state.navBarOption);
  

  return (
    <div 
    >
<br></br>
            <div className={active == 'ale' ? styles.hatch1 : styles.hatch2}>
                <div
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
                </div>
              </div>


<br></br>
</div>


  );
}
