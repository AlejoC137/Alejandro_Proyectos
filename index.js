require('dotenv').config();
const app = require("./src/app.js")
const { run } = require('./src/dataBase/dataBase.js')

const PORT = 3001

run().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
}).catch(err => {
    console.error("Failed to connect to PostgreSQL", err);
});



