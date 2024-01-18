import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Index from './Components/Body/Index'
import Adminlogin from './Components/Admin/Adminlogin/Adminlogin'
import Adminregister from './Components/Admin/Adminregister/Adminregister'
import Adminfrgpwd from './Components/Admin/AdminFgtPwd/Adminfrgpwd'

import Category from './Components/Admin/Category/Category'
import Products from './Components/Admin/Products/Products'
import Catedit from './Components/catedit/Catedit'
import AdminHome from './Components/Admin/AdminHome/AdminHome'
import Viewproduct from './Components/viewproducts/Viewproduct'
import Productfulldetails from './Components/prductfuldetails/Productfulldetails'
import Editproduct from './Components/editproduct/Editproduct'
import Userreg from './Components/userreg/Userreg'
import Userlogin from './Components/userlogin/Userlogin'
import Productfulldetailscustomer from './Components/productfulldetailscustomer/Productfulldetailscustomer'
import Cart from './Components/cart/Cart'
import Whishlist from './Components/Wishlist/Whishlist'



function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        
      <Route path='/' Component={Index}/>
      <Route path='/Adminlogin' Component={Adminlogin}/>
      <Route path='/Adminhome' Component={AdminHome}/>
      <Route path='/Adminregister' Component={Adminregister}/>
      <Route path='/Adminfrgpwd' Component={Adminfrgpwd}/>
      <Route path='/Category' Component={Category}/>
      <Route path='/editcategory/:id' Component={Catedit}/>
      <Route path='/products' Component={Products}/>
      <Route path='/viewproducts/:categoryname' Component={Viewproduct}/>
      <Route path='/productfulldetails/:id' Component={Productfulldetails}/>
      <Route path='/editproduct/:id' Component={Editproduct}/>
      <Route path='/userreg' Component={Userreg}/>
      <Route path='/userlogin' Component={Userlogin}/>
      <Route path='/productdetailscustomer/:id' Component={Productfulldetailscustomer}/>
      <Route path='/cart/:id' Component={Cart}/>
      <Route path='/wishlist/:id' Component={Whishlist}/>


      </Routes>
      
      </BrowserRouter>

    </>
  )
}

export default App
