const ProductRepo = require("../Repositories/ProductRepository");
const CategoryRepo = require("../Repositories/CategoryRepository");
const AdminRepo = require("../Repositories/UserRepository");


///////////////////////////////Profile////////////////////////////
async function viewProfile(id) {
    try{
        const admin = await AdminRepo.getUserById(id);
        return admin;
    } catch(error) {
        throw new Error(`Error Fetching Profile: ${JSON.stringify(error)}`);
    }
}

async function editProfile(id, updates) {
    
    try {
        const updated = await AdminRepo.editProfile(id, updates);

        return updated;
    } catch (error) {
        throw new Error(`Error Editing Profile ${error.message}`);
    }
}
///////////////////////////////Products////////////////////////////


async function CreateProduct(productData) {
    try{
        const product = await ProductRepo.CreateProduct(productData);

        return product;
    }
    catch (error) {
        throw new Error(`Error creating product: ${error.message}`);
    }
}

async function getProducts() {
    const products = await ProductRepo.getProducts();

    return products;
}



async function getProductById(Id) {
    const product = await ProductRepo.getProductById(Id);

    return product;
}

async function getProductByName(name) {
    const product = await ProductRepo.getProductByName(name);

    return product;
}

async function getProductBySubcategory(subategory) {
    const product = await ProductRepo.getProductBySubcategory(subategory);

    return product;
}

async function getProductByStatus(status) {
    const product = await ProductRepo.getProductByStatus(status);

    return product;
}

async function updateProduct(id, updates) {
   const updateProduct = await ProductRepo.updateProduct(id, updates);

   return updateProduct;
}

async function removeProduct(id) {
    try{
        const removeProduct = await ProductRepo.removeProduct(id);

        return removeProduct;
    }
    catch (err) {
        throw new Error (`Error deleting Product: ${err.message}`);
    }
}

///////////////////////////////Categories////////////////////////////

async function CreateCategory(categoryData) {
    try{
        const category = await CategoryRepo.CreateCategory(categoryData);

        return category;
    }
    catch (error) {
        throw new Error(`Error creating category: ${error.message}`);
    }
}

async function getCategories() {
    const Catecories = await CategoryRepo.getCategories();

    return Catecories;
}

async function getCategoryById() {
    const Catecory = await CategoryRepo.getCategoryById();

    return Catecory;
}

async function getCategoryByname() {
    const Catecory = await CategoryRepo.getCategoryByname();

    return Catecory;
}

async function updateCategory(id, updates) {
   const updateCategory = await CategoryRepo.updateCategory(id, updates);

   return updateCategory;
}

async function removeCategory(id) {
    try{
        const removeCategory = await CategoryRepo.removeCategory(id);

        return removeCategory;
    }
    catch (err) {
        throw new Error (`Error deleting Category: ${err.message}`);
    }
}



module.exports ={
    viewProfile,
    editProfile,
    CreateProduct,
    getProducts,
    getProductById,
    getProductByName,
    getProductBySubcategory,
    getProductByStatus,
    updateProduct,
    removeProduct,
    CreateCategory,
    getCategories,
    getCategoryById,
    getCategoryByname,
    updateCategory,
    removeCategory
}