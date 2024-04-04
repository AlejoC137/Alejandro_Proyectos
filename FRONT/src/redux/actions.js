import {
  POST_A_PROJECT,
  GET_ALL_PROJECTS,
  SET_LENGUAJE,
  SET_VISITOR,
  SET_NAV_OPTION,
} from "./actions-types";

import axios from "axios";
import { useSelector } from "react-redux";
// import Swal from "swal"
import Swal from "sweetalert2";



export function getAllProjects(category) {


  return async function (dispatch) {
    
      try {
        // /project?collection=soci
          const projects = await axios.get(`/project?collection=${category}`);
          // console.log(projects.data);
          return dispatch({
              type: GET_ALL_PROJECTS,
              payload: projects.data,
          });          
      } catch (error) {
          console.log(error.message);
      }
  };
    };

export function prePostProject(proyectToBePosted) {

    
  
            return dispatch({
                type: POST_A_PROJECT,
                payload: proyectToBePosted,
            });          

      
    };

export async function  postProject(projectData) {
// console.log(projectData);
        // return  function (dispatch) {
            try {
                await axios.post('/project' , projectData);
                // console.log(JSON.stringify(projectData));
                // return dispatch({
                    // type: POST_A_PROJECT,
                    // payload: proje\ctData,
                // })
            } catch (error) {
                console.log(error.message)
            }
               
              
           
        // };
      
    };

export function setLenguaje(lenguaje) {

    return function (dispatch) {
        try {
  
                    return dispatch({
                        type: SET_LENGUAJE,
                        payload: lenguaje,
               
                })
                .catch((error) => {
  console.log(error);             
   });
        } catch (error) {
            console.log(error.message);
        }
    };
    };

export function setVisitor( visitorName ) {
        return function (dispatch) {
        try {
  
                    return dispatch({
                        type: SET_VISITOR,
                        payload: [
                            visitorName,
                            // visitorTag,
                       ]
               
                })
            
                .catch((error) => {
  console.log(error);             
   });
        } catch (error) {
            console.log(error.message);
        }
    };
    };

export function setNavBarOption( option ) {
        return function (dispatch) {
        try {
  
                    return dispatch({
                        type: SET_NAV_OPTION,
                        payload: option
                })
            

        } catch (error) {
            console.log(error.message);
        }
    };
    };