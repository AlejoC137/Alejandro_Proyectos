import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects, postProject, getMainProfile, getMaindefinitions } from '../../../redux/actions';
import Cards from '../../components/cards/Cards.jsx'
import styles from './Home.module.css';
import MenuBar from "../../components/MenuBar/MenuBar.jsx";
import InfoBar from "../../components/InfoBar/InfoBar.jsx";
import MainCharacterDisplayInfo from "../../components/mainCharacterDisplayInfo/MainCharacterDisplayInfo.jsx";
import InfoCol from "../../components/infoCol/InfoCol.jsx";
import {
  CODE,
  SOCI,
  ARCH,
} from "../../../redux/actions-types.js";


function Home() {
  
  const dispatch = useDispatch();
  // useEffect( () => {

  //   dispatch(getMaindefinitions())

  // } , [] );  

    
    const Visitor = useSelector(state => state.visitorData);

   

    const Projects = useSelector(state => state.allProjects);
    const MenuBarOption = useSelector(state => state.MenuBarOption);
    const definitions = useSelector(state => state.mainDefinitions);
    // console.log(definitions);    

    return (
    <div className="flex">
<div>
        <br></br>

      {/* <MainCharacterDisplayInfo></MainCharacterDisplayInfo> */}
      <div
      className="flex"
      >
      <MenuBar
      definitions={definitions}
      ></MenuBar>
  

      </div>

</div>
      <div>
      <br></br>
      <Cards 
      PROJECT={Projects} 
      // PAD =  {Projects}
      />
      </div>

    </div>
    );
}

export default Home;
