import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './MenuBar.module.css';
import {
  CODE,
  SOCI,
  ARCH,
  ALE,
} from "../../../redux/actions-types.js";
import { getAllProjects, getMainProfile, getMaindefinitions, setMenuBarOption } from "../../../redux/actions.js";
import InfoCol from "../infoCol/InfoCol.jsx";

export default function MenuOpt(props) {
  const dispatch = useDispatch();

  const [currentDefinition, setCurrentDefinition ]= useState('')
  const MenuBarOption = useSelector(state => state.MenuBarOption);
  useEffect( () => {

    dispatch(getMaindefinitions())


  } , [] );  
  
  let toShow = ''

//   {SOCI === MenuBarOption && mainProfile.definition[0].soci ? toShow = mainProfile.definition[0].soci  : ''}
// 
//   {CODE === MenuBarOption && mainProfile.definition[0].code ? toShow =  mainProfile.definition[0].code  : ''}
// 
//   {ARCH === MenuBarOption && mainProfile.definition[0].arch ? toShow = mainProfile.definition[0].arch  : ''}







  const definition1 = useSelector(state => state.mainDefinitions);
  let infoToDisplay;
  const handleOnClick = () => {

    let toDispatch;



    
dispatch(setMenuBarOption(props.keyName))
setCurrentDefinition(definition1);
console.log();

            }

  return (
    
            <div className={MenuBarOption === props.keyName ? styles.hatch1 : styles.hatch2}>
            <div 
             className={
              MenuBarOption === props.keyName?
            "flex items-center border-b-2 border-b-black ":
            "flex items-center border-b-2 border-slate-400 "}
            
            
            
          >

                <button
 className={
  MenuBarOption === props.keyName?
"border-black border-b-0 border-l-2  border-t-0 w-64 p-2 rounded-lg shadow-lg":
"border-slate-400  border-b-0 border-l-2  border-t-0 w-64 p-2 rounded-lg shadow-lg"}

                onClick={()=>{handleOnClick()}}

                >
                <div
                className={
                    MenuBarOption === props.keyName?
                  "font-Montserrat font-bold text-8xl flex flex-col w-56 hover:text-pureRed ":
                  "font-Montserrat font-bold text-8xl flex flex-col w-56 text-slate-400 hover:text-pureRed "}>
                  {props.tittle}
                </div>
                <div 
                
                
                className={
                  MenuBarOption === props.keyName?
                "font-Montserrat  text-2xl flex flex-col":
                "font-Montserrat  text-2xl flex flex-col text-slate-400  "}
                
                
                
>
                  {props.name}
                </div>
                <div className="font-Montserrat  text-2xl flex flex-col">
                  {/* {
                          MenuBarOption === props.keyName?
                  definition1[MenuBarOption].definitionES:
                  ''         
                  } */}
                </div>

                </button>
                
                        <div 


className={
  MenuBarOption === props.keyName?
"w-64 mr- ml-3 bg-white  border-r-2 border-b-2 border-black rounded-lg shadow-lg ":
"w-64 mr- ml-3   border-r-0 border-b-0 border-slate-400 rounded-lg shadow-lg"}

                        >
                            
                         <p
                         className="p-1 "
                         >
                          
{
    MenuBarOption === props.keyName && definition1[MenuBarOption] && 'definitionES' in definition1[MenuBarOption] ?
    definition1[MenuBarOption].definitionES :
    ''         
}
                          </p>
                        </div>

                </div>

            </div>

  );
}
