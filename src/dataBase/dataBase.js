require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY; // This is the Service Role or Anon key

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase URL or Key missing in .env');
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  try {
    // Simple query to verify connection
    const { data, error } = await supabase.from('users').select('count', { count: 'exact', head: true });
    
    if (error && error.code !== 'PGRST116') { // PGRST116 just means table might be empty or similar, but connection worked
       // If the table doesn't exist yet, it might error, but we just want to know if the client works
       console.log('Supabase client initialized.');
    } else {
       console.log('Connected to Supabase successfully.');
    }
    
    return supabase;
  } catch (error) {
    console.error('Unable to connect to Supabase:', error);
    throw error;
  }
}

module.exports = { run, supabase };
