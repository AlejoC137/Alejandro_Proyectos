import {
  POST_A_PROJECT,
  GET_ALL_ITEMS,
  GET_ALL_PROJECTS,
  SET_LENGUAJE,
  SET_VISITOR,
  SET_NAV_OPTION,
  GET_MAIN_PROFILE,
  GET_PROJECTS_BY_ID,
  GET_MAIN_DEFINITIONS,
  PUT_PROJECT,
  CODE,
  SOCI,
  ARCH,

} from "./actions-types";

import axios from "axios";
import { useSelector } from "react-redux";
// import Swal from "swal"
import Swal from "sweetalert2";



export function getAllProjects(category, id) {
  return async function (dispatch) {
    try {
      const projects = await axios.get(`/project?db=projects&collection=${category}`);
      

      // console.log(projects.data[0]);
      if (id) { // Check if id exists
        for (let i = 0; i < projects.data.length; i++) {
          if (projects.data[i]._id === id) {
            // console.log(projects.data[i]);
            return dispatch({
              type: GET_PROJECTS_BY_ID,
              payload: projects.data[i],
            });
          }
        }
        // If id is provided but not found in any projects
        console.log(`Project with id ${id} not found.`);
      } else {
        return dispatch({
          type: GET_ALL_PROJECTS,
          payload: projects.data,
        });
      }

      
    } catch (error) {
      console.log(error.message);
    }
  };
}


export function prePostProject(proyectToBePosted) {

    
  
            return dispatch({
                type: POST_A_PROJECT,
                payload: proyectToBePosted,
            });          

      
    };



export function setLenguaje(lenguaje) {
  return function (dispatch) {
      // console.log(lenguaje);
        try {
  
                    return dispatch({
                        type: SET_LENGUAJE,
                        payload: lenguaje,
               
                })
   
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
                        payload: 
                            visitorName,
                            // visitorTag,
                       
               
                })
            
                .catch((error) => {
  console.log(error);             
   });
        } catch (error) {
            console.log(error.message);
        }
    };
    };

export function setMenuBarOption(option) {
    return function (dispatch) {
      try {
        dispatch({
          type: SET_NAV_OPTION,
          payload: option,
        });
  
        // Mapping the option to the corresponding category
        let category;
        switch (option) {
          case 'ARCH':
            category = 'arch';
            break;
          case 'SOCI':
            category = 'soci';
            break;
          case 'CODE':
            category = 'code';
            break;
          default:
            category = '';
            break;
        }
  
        // Dispatching getAllProjects with the determined category
        if (category !== '') {
          dispatch(getAllProjects(category));
        }
      } catch (error) {
        console.log(error.message);
      }
    };
  }

export function getAllItms() {
    return async function (dispatch) {
    
        try {
          // /project?collection=soci
            const items = await axios.get(`/items`);
            // console.log(projects.data);
            return dispatch({
              type: GET_ALL_ITEMS,
              payload:items.data,
            });          
        } catch (error) {
            console.log(error.message);
        }
    };
    };
export function getMainProfile() {
    return async function (dispatch) {
    
        try {
          // /project?collection=soci
            const mainProfile = await axios.get(`/infomain`);
            // console.log(projects.data);
            return dispatch({
              type: GET_MAIN_PROFILE,
              payload:mainProfile.data,
            });          
        } catch (error) {
            console.log(error.message);
        }
    };
    };


export function getMaindefinitions() {
    return async function (dispatch) {
    
        try {
          // /project?collection=soci
            const mainProfile = await axios.get(`/infomain`);
            // console.log(mainProfile.data.definitions);
            return dispatch({
                type: GET_MAIN_DEFINITIONS,
                payload: mainProfile.data.definitions,
            });          
        } catch (error) {
            console.log(error.message);
        }
    };
    };



    
export function patchVitrina() {
      return async function (dispatch) {
        try {
          const responseDel = await axios.delete('/delvitrina');

          

          // console.log(response);
          Swal.fire('Proyecto actualizado exitosamente');
          // return dispatch({
            // type: PUT_PROJECT,
            // payload: response.data, // You may or may not need to dispatch the updated project data
          // });
        } catch (error) {
          Swal.fire(error.response.data.error);
        }
      };
    }

export  async function updateProject(updateData) {
    //  return  function (dispatch){
       try {
        // console.log(updateData);
          await axios.put('/updatemenu', updateData).then(response => {
            console.log(response);
          })
          .catch(error => {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
        // Dispatch an action if needed
        // return {
          // type: PUT_PROJECT,
          // payload: response.data, // You may or may not need to dispatch the updated project data
        // };

        // console.log(response);
      } catch (error) {
        // Swal.fire(error.response.data.error);
        // Optionally, you can throw the error to handle it in the component
        console.log(error.message)

      }
      
    }



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