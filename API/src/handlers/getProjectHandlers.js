const {
    getAllProjectControler,
    getProjectByKeyControler
} =  require('../controlers/getProjectControler.js')


const getAllProject = async (req,res) => {
    try {
        const category = req.query.category;
         await getAllProjectControler(req,res,category);


    } catch (error) {

        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor' });
    }
}

const getProjectByKey = async (req,res) => {
    try {
        let search = {key:req.query.key ,value: req.query.value, category: req.query.category } 
        // console.log(value);
         await getProjectByKeyControler(req,res,search);

    } catch (error) {

        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor' });
    }
}


module.exports = {
    
    getAllProject,
    getProjectByKey

}