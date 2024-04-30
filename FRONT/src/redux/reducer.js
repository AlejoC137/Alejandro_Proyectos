import {
    
    POST_A_PROJECT,
    GET_ALL_PROJECTS,
    SET_LENGUAJE,
    SET_VISITOR,
    SET_NAV_OPTION,
    GET_MAIN_PROFILE,
    GET_PROJECTS_BY_ID,
    GET_MAIN_DEFINITIONS
    
  } from "./actions-types";
  
  const initialState = {
    allProjects: [],
    projectById: {},
    projectToBePosted: {},
    currentLenguaje: 'ES',
    visitorData:'',
    MenuBarOption:'CODE',
    mainProfile:{},
    mainDefinitions:{},
    
    
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PROJECTS:
        return {
            ...state,
            allProjects: action.payload,
                    // console.log(action.payload);
        };
        case GET_PROJECTS_BY_ID:
        return {
            ...state,
            projectById: action.payload,
                    // console.log(action.payload);
        };
        case GET_MAIN_DEFINITIONS:
        return {
            ...state,
            mainDefinitions: action.payload,
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
              MenuBarOption: action.payload,
            };
        case GET_MAIN_PROFILE:
            return {
              ...state,
              mainProfile: action.payload,
            };


      default:
        return state;
    }
  };
  
  export default reducer;
  