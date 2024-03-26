import {
    
    POST_A_PROJECT,
    GET_ALL_PROJECTS,
    SET_LENGUAJE,
    
  } from "./actions-types";
  
  const initialState = {
    allProjects: [],
    postedProject: [],
    currentLenguaje: 'ES',

    
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PROJECTS:
        return {
            ...state,
            allProjects: action.payload,
                    // console.log(action.payload);
        };
  
        case POST_A_PROJECT:
            return {
              ...state,
              postedProject: action.payload,
            };

        case SET_LENGUAJE:
            return {
              ...state,
              currentLenguaje: action.payload,
            };


      default:
        return state;
    }
  };
  
  export default reducer;
  