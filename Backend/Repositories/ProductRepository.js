const supabase = require("../Config/SupabaseClient");

async function CreateProduct(product) {
  const { data, error } = await supabase
    .from("Products")
    .insert([product])
    .single();
  if (error) throw new Error(error.message);

  return data;
}

async function getProducts() {
  const { data, error } = await supabase.from("Products").select("*");
  if (error) throw new Error(error.message);

  return data;
}

async function getProductById(id) {
  const { data, error } = await supabase
    .from("Products")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);

  return data;
}

async function getProductByName(name) {
  const { data, error } = await supabase
    .from("Products")
    .select("*")
    .eq("name", name)
    .single();
  if (error) throw new Error(error.message);

  return data;
}

async function getProductBySubcategory(subcategory) {
  const { data, error } = await supabase
    .from("Products")
    .select("*")
    .eq("subategory", subcategory)
    .single();
  if (error) throw new Error(error.message);

  return data;
}

async function getProductByStatus(status) {
  const { data, error } = await supabase
    .from("Products")
    .select("*")
    .eq("availability_status", status)
    .single();
  if (error) throw new Error(error.message);

  return data;
}

async function updateProduct(id, updates) {
  const { data, error } = await supabase
    .from("Products")
    .update(updates)
    .eq("Id", id)
    .single();
  if (error) throw new Error(error.message);

  return data;
}

async function removeProduct(id) {
  const { data, error } = await supabase
    .from("Products")
    .delete()
    .eq("Id", id)
    .single();
  if (error) throw new Error(error.message);
}

module.exports = {
  CreateProduct,
  getProducts,
  getProductById,
  getProductByName,
  getProductBySubcategory,
  getProductByStatus,
  updateProduct,
  removeProduct,
};
