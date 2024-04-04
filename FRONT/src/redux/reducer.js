import {
    
    POST_A_PROJECT,
    GET_ALL_PROJECTS,
    SET_LENGUAJE,
    SET_VISITOR,
    SET_NAV_OPTION,
    
  } from "./actions-types";
  
  const initialState = {
    allProjects: [],
    projectToBePosted: {},
    currentLenguaje: 'ES',
    visitorData:'',
    navBarOption:'',

    
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
              projectToBePosted: action.payload,
            };

        case SET_LENGUAJE:
            return {
              ...state,
              currentLenguaje: action.payload,
            };
            
        case SET_VISITOR:
            return {
              ...state,
              visitorData: action.payload,
            };

        case SET_NAV_OPTION:
            return {
              ...state,
              navBarOption: action.payload,
            };


      default:
        return state;
    }
  };
  
  export default reducer;
  