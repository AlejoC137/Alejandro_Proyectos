const {
    getAllProject,
    getProjectByKey,

} = require("../handlers/getProjectHandlers")

const {Router} = require('express');
const getProjectRouter = Router()

getProjectRouter.get("/projects/category" , getAllProject);
//http://localhost:3001/projects/category?category=arch

getProjectRouter.get("/projects/search" , getProjectByKey);
//http://localhost:3001/projects/search?key=name&value=Project%20One&category=arch

getProjectRouter.get('/sayhi' , (req, res ) => {
    res.send(' hi ');
})

module.exports =  getProjectRouter
