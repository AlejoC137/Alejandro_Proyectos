const {
    createProjectInstance , 
    getAllEntries , 
    getEntryByKey ,
    deleteEntryByKey,
    editFieldById
                     } = require('../dataBase/funtions.js')

const { Project } = require('../models/projectModel.js')
const { ObjectId } = require('mongodb');
const {     
    sampleData1,
    sampleData2,
    sampleData3, 
} = require('../../../BACK/src/sampledata.js');

// createProjectInstance(sampleData1 , Project , {db:"projects" , collection: "arch" }) 
// createProjectInstance(sampleData2 , Project , {db:"test" , collection: "projects" }) 
// createProjectInstance(sampleData3 , Project , {db:"test" , collection: "projects" }) 

// getAllEntries( {db:"test" ,     collection: "projects" })
// getAllEntries( {db:"projects" , collection: "arch" })

    
    // const search = {
    //     key: "_id",
    //     value: new ObjectId('65e14612b2ae29d4a1800633')
    // };
    // const search = {
    //     key: "name",
    //     value: 'Project Three'
    // };


getEntryByKey({ db: "test", collection: "projects" }, search).then(result => {
    // Access and use properties of the retrieved object
    console.log(result.name); // Accessing the 'name' property
    console.log(result.category); // Accessing the 'category' property
    // Continue using other properties as needed
})
.catch(error => {
    console.error('Error:', error); // Handle errors if any
});


// deleteEntryByKey({ db: "test", collection: "projects" }, search)


// const idToUpdate = new ObjectId('65e14612b2ae29d4a1800633'); // Replace with the actual _id value
// const fieldToUpdate = "category"; // Replace with the field you want to update
// const newValue = "New Category"; // Replace with the new value for the field
// editFieldById({ db: "test", collection: "projects" }, idToUpdate, fieldToUpdate, newValue);



