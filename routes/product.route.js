const express = require("express");
const router = express.Router();
const {
  getSingleProduct,
  getAllProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controller.js");

router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.post("/", saveProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
