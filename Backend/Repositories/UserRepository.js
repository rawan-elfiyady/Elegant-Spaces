const supabase = require("../Config/SupabaseClient");

async function getUserByEmail(email) {
  console.log("get in the repo file")
  const { data, error } = await supabase
    .from("Users")
    .select("*")
    .eq("email", email)
    .maybeSingle();
    console.log(email);
    console.log(data);
    if (error) throw new Error(error.message);
    
    return data;
}

module.exports = {
    getUserByEmail
}
