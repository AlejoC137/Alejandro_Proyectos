import {
  POST_A_PROJECT,
  GET_ALL_PROJECTS,
  SET_LENGUAJE,
} from "./actions-types";

import axios from "axios";
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
}


export function postProject() {

  return function (dispatch) {
      try {
          axios
              .post("/postProject" , {project})
              .then((data) => {
                  Swal.fire("Comentario creado exitosamente");
                  return dispatch({
                      type: POST_A_PROJECT,
                      payload: data,
                  });
              })
              .catch((error) => {
                  Swal.fire(error.response.data.error);
              });
      } catch (error) {
          console.log(error.message);
      }
  };
}


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
  }