const express = require("express");
const router = express.Router();
const AdminServices = require("../Services/AdminServices");

router.post("/Product", async (req, res, next) => {
  try {
    const { name, subcategory, availability_status } = req.body;
    const Product = await AdminServices.CreateProduct({
      name,
      subcategory,
      availability_status,
    });
    res.status(201).json("Product created successfully", Product);
  } catch (err) {
    next(err);
  }
});

router.get("/Products", async (req, res, next) => {
  try {
    const products = await AdminServices.getProducts();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

router.get("/ProductId/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await AdminServices.getProductById(id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

router.get("/ProductName", async (req, res, next) => {
  try {
    const { name } = req.body;
    const product = await AdminServices.getProductByName(name);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

router.get("/ProductSubcategory", async (req, res, next) => {
  try {
    const { subcategory } = req.body;
    const product = await AdminServices.getProductBySubcategory(subcategory);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

router.get("/ProductStatus", async (req, res, next) => {
  try {
    const { availability_status } = req.body;
    const product = await AdminServices.getProductByStatus(availability_status);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

router.put("/UpdateProduct/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const updated = await AdminServices.updateProduct(id, updates);
    res.status(200).json("Product updated successfully", updated);
  } catch (err) {
    next(err);
  }
});

router.delete("/deleteProduct/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedProduct = await AdminServices.removeProduct(id);
    res.status(200).json("Product deleted successfully:", deletedProduct);
  } catch (err) {
    next(err);
  }
});

///////////////////////////////// Product /////////////////////////////////////

router.post("/Category", async (req, res, next) => {
  try {
    const { name } = req.body;
    const Catecory = await AdminServices.CreateCategory({ name });
    res.status(201).json("Product created successfully", Catecory);
  } catch (err) {
    next(err);
  }
});

router.get("/Categories", async (req, res, next) => {
  try {
    const categories = await AdminServices.getCategories();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
});

router.get("/CategoryId/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const category = await AdminServices.getCategoryById(id);
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
});

router.get("/CategoryName", async (req, res, next) => {
  try {
    const { name } = req.body;
    const category = await AdminServices.getCategoryByname(name);
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
});

router.put("/UpdateCategory/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const updated = await AdminServices.updateCategory(id, updates);
    res.status(200).json("Category updated successfully", updated);
  } catch (err) {
    next(err);
  }
});

router.delete("/deleteCategory/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedCategory = await AdminServices.removeCategory(id);
    res.status(200).json("Category deleted successfully:", deletedCategory);
  } catch (err) {
    next(err);
  }
});
