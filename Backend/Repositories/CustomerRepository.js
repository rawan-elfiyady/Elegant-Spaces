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
    .select("*")
    .eq("email", email)
    .maybeSingle();

    console.log(error.message);
    console.log(error.message);
    if(error) throw new Error(error.message);

    return data;
}

module.exports = {
  createCustomer,
  getCustomerByEmail,
};
