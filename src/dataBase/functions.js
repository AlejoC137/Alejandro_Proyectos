const { supabase } = require('./dataBase');

async function createProjectInstance(data, tableName) {
    try {
        const { data: result, error } = await supabase
            .from(tableName || 'projects')
            .insert([data])
            .select();

        if (error) throw error;
        
        console.log('Entry created successfully');
        return result[0];
    } catch (err) {
        console.error('Error inserting document:', err.message);
        throw err;
    }
}

async function getAllEntries(tableName) {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .select('*');

        if (error) throw error;
        
        console.log(`Fetched ${data.length} entries from ${tableName}`);
        return data;
    } catch (error) {
        console.error('Error fetching entries:', error.message);
        throw error;
    }
}

async function getEntryByKey(tableName, { key, value }) {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .select('*')
            .eq(key, value)
            .maybeSingle();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching entry by key:', error.message);
        throw error;
    }
}

async function deleteEntryByKey(tableName, { key, value }) {
    try {
        const { error } = await supabase
            .from(tableName)
            .delete()
            .eq(key, value);

        if (error) throw error;
        console.log('Deleted successfully');
    } catch (error) {
        console.error('Error deleting entry:', error.message);
        throw error;
    }
}

async function editFieldById(tableName, id, fieldToUpdate, newValue) {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .update({ [fieldToUpdate]: newValue })
            .eq('id', id)
            .select();

        if (error) throw error;
        console.log(`Field "${fieldToUpdate}" updated successfully.`);
        return data[0];
    } catch (error) {
        console.error('Error updating field by id:', error.message);
        throw error;
    }
}

module.exports = { 
    createProjectInstance, 
    getAllEntries, 
    getEntryByKey, 
    deleteEntryByKey, 
    editFieldById 
};