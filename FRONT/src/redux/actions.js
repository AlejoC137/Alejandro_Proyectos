import {
  POST_A_PROJECT,
  GET_ALL_PROJECTS,
  SET_LENGUAJE,
  SET_VISITOR,
  SET_NAV_OPTION,
  GET_MAIN_PROFILE,
  PUT_PROJECT,
  CODE,
  SOCI,
  ARCH,

} from "./actions-types";

import axios from "axios";
import { useSelector } from "react-redux";
// import Swal from "swal"
import Swal from "sweetalert2";



export function getAllProjects(category) {


  return async function (dispatch) {
    
      try {
        // /project?collection=soci
          const projects = await axios.get(`/project?db=projects&collection=${category}`);
        //   console.log(projects.data);
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

// export function setMenuBarOption( option ) {
//         return function (dispatch) {
//         try {
  
//                     return dispatch({
//                         type: SET_NAV_OPTION,
//                         payload: option
//                 })
            

//         } catch (error) {
//             console.log(error.message);
//         }
//     };
//     };

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

export function getMainProfile() {
    return async function (dispatch) {
    
        try {
          // /project?collection=soci
            const projects = await axios.get(`info?db=info&collection=profiles`);
            // console.log();
            return dispatch({
                type: GET_MAIN_PROFILE,
                payload: projects.data[0],
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