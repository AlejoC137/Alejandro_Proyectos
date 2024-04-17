import { Route , Routes, useLocation } from 'react-router-dom'; // Import Route from react-router-dom
// import './App.css'
import  Home  from "./body/views/home/Home.jsx";
import Landing from './body/views/landing/Landing.jsx';
import  NewProjectPortal  from "./body/views/newProjectPortal/NewProjectPortal.jsx";
import  NewProfilePortal  from "./body/views/newProfilePortal/NewProfilePortal.jsx";
import  Detail  from "./body/views/detail/Detail.jsx";

import  PutVitrina  from "./body/views/putVitrina/PutVitrina.jsx";
import styles from './App.module.css';
import NavBar from './body/components/navBar/NavBar.jsx';
import Footer from './body/components/footer/Footer.jsx';

function App() {
const location = useLocation()
  return (
    <div       
    className={styles.hatch}
    >
      {location.pathname !== "/" && <NavBar />}
    <Routes

    >

        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/newproject" element={<NewProjectPortal/>} />
        <Route path="/newprofile" element={<NewProfilePortal/>} />
        <Route path="/detail/:data" element={<Detail/>} />
        
        
        
        <Route path="/putvitrina" element={<PutVitrina/>} /> {/* <- Temporal */}


    </Routes>

    {location.pathname !== "/" && <Footer />}
    </div>
  )
}

export default App
