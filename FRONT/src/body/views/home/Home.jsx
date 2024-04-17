import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects, postProject, getMainProfile } from '../../../redux/actions';
import Cards from '../../components/cards/Cards.jsx'
import styles from './Home.module.css';
import MenuBar from "../../components/MenuBar/MenuBar.jsx";
import MainCharacterDisplayInfo from "../../components/mainCharacterDisplayInfo/MainCharacterDisplayInfo.jsx";
import InfoCol from "../../components/infoCol/InfoCol.jsx";
import {
  CODE,
  SOCI,
  ARCH,
} from "../../../redux/actions-types.js";

function Home() {
  
  const dispatch = useDispatch();
    useEffect( () => {

      dispatch(getMainProfile())

    } , [] );

    
    const Visitor = useSelector(state => state.visitorData);

   

    const Projects = useSelector(state => state.allProjects);
    
    // console.log(Projects);    

    return (
    <div className="flex">
<div>
        <br></br>

      {/* <MainCharacterDisplayInfo></MainCharacterDisplayInfo> */}
      <div
      className="flex"
      >
      <MenuBar></MenuBar>
      <InfoCol
      className='h-72'
      ></InfoCol>
      </div>

</div>
      <div>
      <br></br>
      <Cards 
      ProjectsCollectio={Projects} 
      // PAD =  {Projects}
      />
      </div>

    </div>
    );
}

export default Home;
