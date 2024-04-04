import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects, postProject } from '../../../redux/actions';
import Cards from '../../components/cards/Cards.jsx'
import styles from './Home.module.css';
import NavBar from "../../components/navBar/NavBar.jsx";
import InfoCol from "../../components/infoCol/InfoCol.jsx";
import {
  CODE,
  SOCI,
  ARCH,
} from "../../../redux/actions-types.js";

function Home() {
    const dispatch = useDispatch();
    
    useEffect( () => {
    } , [] );
    const Visitor = useSelector(state => state.visitorData);
    console.log(Visitor);
   


    const [collection, setCollection] = useState('');
    const [selectedProjects, setSelectedProjects] = useState([]);

    const Projects = useSelector(state => state.allProjects);
    // const Visitor = useSelector(state => state.visitorData);

    const onPressHandler = (value) => {
        // Handle press action
        setCollection(value)
        setSelectedProjects( dispatch( getAllProjects(value) ) )  
        console.log(Projects);

      };
      
    

    return (
    <div>
      <NavBar></NavBar>
      <InfoCol></InfoCol>
      <Cards 
      ProjectsCollectio={Projects} 
      // PAD =  {Projects}
        />

    </div>
    );
}

export default Home;
