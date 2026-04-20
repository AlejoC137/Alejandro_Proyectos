const {
    postProject,
    // getAllDogsDb,
    // getRazaByID,
    // getDogByName,
    // postDogs,
    // getTemp
} = require("../handlers/postProjectHandlers.js")

const {Router} = require('express');
const postProjectRouter = Router()

postProjectRouter.post( "/postProject" , postProject);

module.exports = postProjectRouter
  
