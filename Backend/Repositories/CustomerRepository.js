const supabase = require("../Config/SupabaseClient");

// create customer
async function createCustomer(customer) {
  const { data, error } = await supabase
    .from("Users")
    .insert([customer])
    .single();

  if (error) throw new Error(error.message);

  return data;
}

// get customer by email
async function getCustomerByEmail(email) {
  const { data, error } = await supabase
    .from("Users")
    .select("id, created_at, name, email, phone, image, role")
    .eq("email", email)
    .maybeSingle();

  if (error) throw new Error(error.message);

  return data;
}

async function getUserById(id) {
  const { data, error } = await supabase
    .from("Users")
    .select("id, created_at, name, email, phone, image, role")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

async function editProfile(id, updates) {
  const { data, error } = await supabase
    .from("Users")
    .update(updates)
    .eq("id", id)
    .single();

    if (error) throw new Error(error.message);

    return data;
}
module.exports = {
  createCustomer,
  getCustomerByEmail,
  getUserById,
  editProfile
};
