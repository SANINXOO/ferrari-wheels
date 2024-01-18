import { Router } from "express";
import * as controller from "./controller.js"
import Auth from './Auth.js'
const router=Router();

router.route("/addadmin").post(controller.AddAdmin);

router.route("/adminlogin").post(controller.AdminLogin);
router.route("/home").get(Auth,controller.home);
router.route("/getemail/:username").get(controller.forgotUsername);
router.route("/adminpassword").patch(controller.forgotAdminpwd);

router.route("/addcategory").post(controller.AddCategory);
router.route("/categorygetdata").get(controller.Category_getdata);
router.route("/deletecategory/:id").delete(controller.deleteCategory);
router.route("/getcategorydetails/:id").post(controller.getcategoryfulldata);
router.route("/editcategorydetails/:id").patch(controller.editCategorydetails);

router.route("/addproduct").post(controller.AddProducts);
router.route("/getCatWiseProducts/:categoryname").get(controller.getCategoryWisedProduct);
router.route("/getProduct/:id").get(controller.getProduct);
router.route("/editProdect/:id").patch(controller.editProdect);
router.route("/deleteproduct/:id").delete(controller.deleteProduct);
router.route("/getAllProducts").get(controller.getAllProducts);

////////////CUSTOMER///////////

router.route("/addcustomer").post(controller.addCustomer);
router.route("/userlogin").post(controller.userLogin);
router.route("/fetchcustomername").post(Auth,controller.fetchCustomername);


/////////////CART/////

router.route("/addToCart").post(controller.AddToCart);
router.route("/getCartProduct/:id").get(controller.getCartProduct);
router.route("/delCartProduct/:id").delete(controller.delCartProduct);
router.route("/delAlltProduct/:id").delete(controller.deleteAllProducts);

/////////////wishlist//////////

router.route("/addToWhishList").post(controller.AddToWishList);
router.route("/getWishlistProduct/:id").get(controller.getWishlistProduct);
router.route("/delWishListProduct/:id").delete(controller.delwishListProduct);



router.route("/placeOrder/:id").post(controller.placeOrder);



export default router;