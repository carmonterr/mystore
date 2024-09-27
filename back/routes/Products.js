const express=require('express')
const router = express.Router();

const {getProducts,newProduct, getProductById, updateProduct, deleteProduct, createProductReview, getProductReviews, deleteReview, getAdminProducts} = require ('../controllers/ProductsController.js');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth.js');

router.route('/productos').get(getProducts);
router.route('/producto/:id').get(getProductById);
router.route("/review").put(isAuthenticatedUser, createProductReview)
router.route("/reviews").get(isAuthenticatedUser, getProductReviews)
router.route("/review").delete(isAuthenticatedUser, deleteReview)

//rutas admin
router.route('/producto/:id').put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct);
router.route('/producto/:id').delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct);
router.route('/producto/nuevo').post(isAuthenticatedUser,authorizeRoles("admin"),newProduct);
router.route('/admin/productos').get(isAuthenticatedUser,authorizeRoles("admin"),getAdminProducts);


module.exports= router;
