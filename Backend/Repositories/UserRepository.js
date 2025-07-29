const supabase = require("../Config/SupabaseClient");

async function getUserByEmail(email) {
  const { data, error } = await supabase
    .from("Users")
    .select("id, email, password, role, name")
    .eq("email", email)
    .maybeSingle();

  if (error) throw new Error(error.message);

  return data;
}

async function getUserById(id) {
  console.log("get in the repository");
  const { data, error } = await supabase
    .from("Users")
    .select("id, created_at, name, email, phone, image, role")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

async function editProfile(id, updates) {
  console.log("updates => ", updates);
  const { data, error } = await supabase
    .from("Users")
    .update(updates)
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  console.log(data);

  return data;
}

module.exports = {
  getUserByEmail,
  getUserById,
  editProfile,
};
