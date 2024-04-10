import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './MainCharacterDisplayInfo.module.css';
import {
  CODE,
  SOCI,
  ARCH,
  ALE,
} from "../../../redux/actions-types.js";
import { getMainProfile, setMenuBarOption } from "../../../redux/actions.js";

export default function MainCharacterDisplayInfo() {
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.userAuth);
  const Visitor = useSelector(state => state.visitorData);


  useEffect( () => {

    dispatch(getMainProfile())

  } , [] );
  const mainProfile = useSelector(state => state.mainProfile);

  const handleOnClick = (e) => {
    dispatch(setMenuBarOption(e))
    console.log(mainProfile)
  }

  return (
    <div className={styles.hatch1} onClick={() => { handleOnClick(ALE) }}>
     
     
      <div className="flex">
        
     

      <div className="font-Montserrat font-bold text-8xl flex flex-col">
        {mainProfile.profileNickName ? mainProfile.profileNickName : ''}
      </div>
      
      <div className="font-Montserrat font-bold text-8xl flex flex-col m-2">
      {mainProfile.media && mainProfile.media.img && mainProfile.media.img[0] && (
      <img className="rounded-full w-20 h-20 object-cover filter grayscale"
          src={mainProfile.media.img[0].URL ? mainProfile.media.img[0].URL : ''} 
          alt={mainProfile.media.img[0].description}/>)}     
       </div>

      <div className="font-Montserrat font-bold text-1 flex flex-col m-2">
        {mainProfile.descriptions ? mainProfile.descriptions[0].description : ''}
<Link to={mainProfile.descriptions ? mainProfile.descriptions[0].ref : ''} className="font-Montserrat font-bold text-l flex flex-col border-4 corner flex-center border-pureRed rounded-md">
  CLICK HERE TO DOWNLOAD CV
</Link>
      </div>




      </div>



     
      <div className="font text-2xl flex flex-col">
        HOLA, {`${Visitor}`}
      </div>
    </div>
  );
}
