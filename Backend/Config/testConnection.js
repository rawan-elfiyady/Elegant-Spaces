const supabase = require('./SupabaseClient');

(async () => {
  const { data, error } = await supabase.from('Users').select('*').limit(1);
  if (error) console.error('Error:', error);
  else console.log('Connection successful. Sample data:', data);
})();
