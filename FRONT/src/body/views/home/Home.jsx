import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects, postProject } from '../../../redux/actions';
import Cards from '../../components/cards/Cards.jsx'
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
      <div>
            <button onClick={() => onPressHandler('arch')}>ARCHITECTURE</button>
            <button onClick={() => onPressHandler('code')}>CODING</button>
            <button onClick={() => onPressHandler('soci')}>SOCIAL</button>
      </div>
      <div>{Visitor !== ''? Visitor : 'ANON USER'}</div>
      <div>
      <Cards 
      currentPAD={Projects} 
      // PAD =  {Projects}
        />

      </div>
    </div>
    );
}

export default Home;
