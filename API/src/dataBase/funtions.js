const {  mongoose } = require("mongoose")
const { Project } = require('../models/projectModel.js')
const { client } =  require('./dataBase.js')
const { ObjectId } = require('mongodb');

function setCollection (db , model ){

return client.db(db).collection(model);

}
function createProjectInstance( data , model , route ) {    ///     <- it createsa new instans and a new in sed project 

    
    // Validate data against the schema
    const { error } = model.validate(data);
    if (error) {
        return new Error(`Validation Error: ${error.message}`);
    }

    // Create an instance of the model
    let createdEntry = new model(data);

    // Convert the Mongoose model instance to a plain JavaScript object
    let entryObject = createdEntry.toObject();

    // Get the collection
    const collection = setCollection(route.db , route.collection)

    // Insert the document
    collection.insertOne(entryObject, (err, result) => {
        if (err) {
            console.error('Error inserting document:', err);
            return;
        }

        console.log('Entry created');
    });
}
async function getAllEntries(route) {
    try {
        // Get the collection
        const collection = setCollection(route.db , route.collection)

        // Use the find() method to retrieve all documents from the collection
        const entries = await collection.find({}).toArray();

        // Log the retrieved documents
        console.log(entries);

        // Return the array of documents
        return entries;
    } catch (error) {
        console.error('Error fetching entries:', error);
        throw error;
    }
}
async function getEntryByKey(route, data) {
    try {
        // Get the collection
        // const collection = setCollection(route.db, route.collection);
        const collection = setCollection(route.db, route.collection);
        
        // Extract key and value from the data object
        const { key, value } = data;

        // Use square brackets to specify the dynamic key in the query object
        const query = {};
        query[key] = value;

        // Use the findOne() method to retrieve the document
        const entry = await collection.findOne(query);

        // Log the retrieved document
        // console.log(entry);

        // Return the document
        return entry;
    } catch (error) {
        console.error('Error fetching entry by key:', error);
        throw error;
    }
}
async function deleteEntryByKey(route, data) {
    try {
        // Get the collection
        const collection = setCollection(route.db, route.collection);
        
        // Extract key and value from the data object
        const { key, value } = data;

        // Use square brackets to specify the dynamic key in the query object
        const query = {};
        query[key] = value;

        // Use the findOne() method to retrieve the document
        await collection.deleteOne(query);

        // Log the retrieved document
        console.log('deleted');

        // Return the document
        // return entry;
    } catch (error) {
        console.error('Error fetching entry by key:', error);
        throw error;
    }
}
async function editFieldById(route, id, fieldToUpdate, newValue) {
    try {
        // Get the collection
        const collection = setCollection(route.db, route.collection);
        
        // Use the updateOne() method to update the specified field of the document with the given _id
        const result = await collection.updateOne(
            { _id: id },
            { $set: { [fieldToUpdate]: newValue } }
        );

        // Check if the update was successful
        if (result.modifiedCount === 1) {
            console.log(`Field "${fieldToUpdate}" of entry with _id ${id} updated successfully.`);
        } else {
            console.log(`Field "${fieldToUpdate}" of entry with _id ${id} not found or value is already set to "${newValue}".`);
        }
    } catch (error) {
        console.error('Error updating field by id:', error);
        throw error;
    }
}



module.exports = { 
    createProjectInstance, 
    getAllEntries, 
    getEntryByKey, 
    deleteEntryByKey, 
    editFieldById 
}