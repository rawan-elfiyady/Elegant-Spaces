const supabase = require("../Config/SupabaseClient");

async function CreateCategory(category) {
    const{data, error} = await supabase
    .from("Categories")
    .insert([category])
    .single();
    if(error) throw new Error(error.message);

    return data;
}

async function getCategories() {
    const{data, error} = await supabase
    .from("Products")
    .single();
    if(error) throw new Error(error.message);

    return data;
}

async function getCategoryById(id) {
    const{data, error} = await supabase
    .from("Products")
    .eq("id", id)
    .single();
    if(error) throw new Error(error.message);

    return data;
}

async function getCategoryByname(name) {
    const{data, error} = await supabase
    .from("Products")
    .eq("name", name)
    .single();
    if(error) throw new Error(error.message);

    return data;
}

async function updateCategory(id, updates) {
    const {data, error} = await supabase
    .from("Categories")
    .update(updates)
    .eq("Id", id)
    .single();
    if (error) throw new Error (error.message);

    return data;
}

async function removeCategory(id) {
    const {data, error} = await supabase
    .from("Catecories")
    .delete()
    .eq("Id", id)
    .single();
    if (error) throw new Error (error.message);

}




module.exports = {
    CreateCategory,
    getCategories,
    getCategoryById,
    getCategoryByname,
    updateCategory,
    removeCategory
};