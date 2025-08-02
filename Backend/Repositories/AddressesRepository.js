const supabase = require("../Config/SupabaseClient");

// create customer
async function addAddress(address) {
  const { data, error } = await supabase
    .from("Addresses")
    .insert([address])
    .single();

  if (error) throw new Error(error.message);

  return data;
}

async function getAddressById(id) {
  const { data, error } = await supabase
    .from("Addresses")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

async function getUserAddresses(id) {
  const { data, error } = await supabase
    .from("Addresses")
    .select("*")
    .eq("customerId", id);

  if (error) throw new Error(error.message);

  return data;
}

async function editAddress(id, updates) {
  const { data, error } = await supabase
    .from("Addresses")
    .update(updates)
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

async function removeAddress(id) {
  const { data, error } = await supabase
    .from("Addresses")
    .delete()
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
}


module.exports = {
    addAddress,
    getAddressById,
    getUserAddresses,
    editAddress,
    removeAddress
}