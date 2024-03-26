import { Route , Routes } from 'react-router-dom'; // Import Route from react-router-dom
import './App.css'
import  Home  from "./body/views/home/Home.jsx";
import  WifiPortal  from "./body/views/wifiPortal/WifiPortal.jsx";
import  NewProjectPortal  from "./body/views/newProjectPortal/NewProjectPortal.jsx";
import  MenuProjectoCafe  from "./body/views/menuProjectoCafe/MenuProjectoCafe.jsx";
import  LenguajeSelect  from "./body/views/lenguajeSelect/LenguajeSelect.jsx";
function App() {

  return (
    <>
    <Routes>

        <Route path="/home" element={<Home/>} />
        <Route path="/wifiportal" element={<WifiPortal/>} />
        <Route path="/newproject" element={<NewProjectPortal/>} />
        <Route path="/menuprojectocafe" element={<MenuProjectoCafe/>} />
        <Route path="/lenguajeSelect" element={<LenguajeSelect/>} />
        {/* <Route path="/home" element={<Home />} /> */}

    </Routes>
    </>
  )
}

export default App
