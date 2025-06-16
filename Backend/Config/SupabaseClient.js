const{ createclient, createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://gxalkculbdwkmkelcbko.supabase.co'

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4YWxrY3VsYmR3a21rZWxjYmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMDM4ODcsImV4cCI6MjA2NTU3OTg4N30.thylCfb1ZdeiABmDGZn9OLjtmJlTeNOcy03-jOBii2U"

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;


