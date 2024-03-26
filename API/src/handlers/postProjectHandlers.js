const {
    postProjectControler
} =  require('../controlers/postProjectControler.js')

const postProject = async (req,res) => {
    try {
        const postedProject = await postProjectControler(req,res);
        // const postedProject = req.body

        res.json(postedProject);

    } catch (error) {

        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor' });
    }
}




module.exports = {
    
    postProject

}