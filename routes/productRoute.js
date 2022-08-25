const express = require("express");
const {
  getAllProducts,
  getProductDetails,
  getProductReviews,
  createProductReview,
  createProduct,
  getAdminProducts,
  getProducts,
} = require("../Actions/productActions");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/all").get(getProducts);

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

module.exports = router;
