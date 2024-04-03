import { Route , Routes } from 'react-router-dom'; // Import Route from react-router-dom
// import './App.css'
import  Home  from "./body/views/home/Home.jsx";
import Landing from './body/views/landing/Landing.jsx';
import  NewProjectPortal  from "./body/views/newProjectPortal/NewProjectPortal.jsx";
import styles from './App.module.css';

function App() {

  return (
    <div       
    className={styles.hatch}
    >
    <Routes

    >

        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/newproject" element={<NewProjectPortal/>} />

    </Routes>
    </div>
  )
}

export default App
