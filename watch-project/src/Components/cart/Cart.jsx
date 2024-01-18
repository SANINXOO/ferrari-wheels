import React,{useEffect,useState} from 'react'
// import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./cart.scss"
import Navbar from '../Navbar/Navbar'

const Cart = () => {


    const {id}=useParams()
    const navigate=useNavigate()
    const [totalPrice,setTotalPrice]=useState(0)
    const [getPrdct,setProdct]=useState([])
    const getPrdctDetails=async()=>{
      const res=await axios.get(` http://localhost:3003/wholewatch/getCartProduct/${id}`)
      console.log(res.data);
      setProdct(res.data)
      // console.log(getPrdct);
    }
    useEffect(()=>{
      getPrdctDetails()
    },[])
  
    useEffect(() => {
      const totalPriceSum = getPrdct.reduce((sum, product) => sum + Number(product.price), 0);
      setTotalPrice(totalPriceSum);
    }, [getPrdct]);
  
    const qty = (e, index) => {
      const selectedQuantity = parseInt(e.target.value, 10);
      const productPrice = getPrdct[index].price;
     
      if (!isNaN(productPrice)) {
        console.log(getPrdct[index].price);
        const updatedPrice = selectedQuantity * productPrice
        console.log(updatedPrice);
        const updatedGetPrdct = [...getPrdct];
        updatedGetPrdct[index].price = updatedPrice;
        setProdct(updatedGetPrdct);
      } else {
        console.error('Invalid product price:', productPrice);
      }
    };

    const BuyNow = async (e) => {
      e.preventDefault();
      const userConfirmed = window.confirm("Are you sure you want to proceed to checkout?");
      if (userConfirmed) {
        try {
  
          // console.log(res.data);
          await axios.post(`http://localhost:3003/wholewatch/placeOrder/${id}`);
          alert("Order Placed");
          window.location.reload()
          navigate("/")
        } catch (error) {
          console.error("Error deleting products:", error);
        }
      }
    };
      const delCartPrdct = async (id) => {
        const userConfirmed = window.confirm("Are you sure you want to delete this product from the cart?");
        if (userConfirmed) {
          try {
            const res = await axios.delete(`http://localhost:3003/wholewatch/delCartProduct/${id}`);
            console.log(res.data);
            if (res) {
              alert("Product deleted");
            } else {
              alert("Product not deleted");
            }
            getPrdctDetails();
          } catch (error) {
            console.error("Error deleting product:", error);
          }
        }
      };

  return (
    <div>
{/* 
<nav className="navbar navbar-light  navbar-main">
  <div className='navbarcontent'>
   
   <button className='homebtn' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> <div><HiMiniBars3CenterLeft />
   </div></button>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false"  id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
    <div className='offcanvas-header2'>
        <div className='userlogo'><CiUser /></div>
        <div className='userlogotext' ><Link className='link5' >{name} </Link></div>
       
    
    </div>
    
    <button type="button" className='homebtn' data-bs-dismiss="offcanvas" ><VscClose /></button>
  </div>
  <div className='offcanvas-borderbottom' ></div>
  <div className="offcanvas-body">
   <div className='offcanvas-body-content'>NEW ARRAIVALS</div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>MOST TRENDING</div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>SHOP 
   </div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>TRACK ORDER</div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content2main'>
   <div className='offcanvas-body-content2'>PLACE A </div>
   <div className='offcanvas-body-content2'>RETURN  / EXCHANGE</div>
   <div className='offcanvas-body-content2'>REQUEST</div>
   </div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>CUSTOMER SUPPORT</div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>VISIT STORE</div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>RELOVE</div>
   <div className='offcanvas-borderbottom' ></div>
  </div>
</div>




   <div className='snitchlogo'><img src="../../../public/download.png" alt="" /></div>
   <div className='homeicons'>
    
    <div><Link className='link5' to={`/userlogin`}><CiUser /></Link></div>
    <div><CiSearch /></div>
    <div><CiHeart /></div>
    <div><PiHandbagSimpleThin /></div>
   
   </div>
  </div>
</nav>
       */}
<Navbar/>


            <div className="cartmain">

<div className='carthead'>Cart</div>
<div className='cartheadbarder1'></div>

{
  getPrdct.map((data,index)=>

<div key={index}>
<div   className='cartbody'>
<div className='cartbodyleft2'>
<div className="cartbanner">
  <img src={data.banner} alt="" />
</div>

</div>
<div className='cartbodyright2'>
<div className='cartproductname'>{data.productname}</div>
<div className='cartproductname'>Size : {data.size}</div>
<div className='cartproductname'>Price : {data.price}</div>

<select onChange={(e) => qty(e, index)}  className='select3' name="cars" id="cars">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
</select>

<div className='removecart'><button onClick={()=>delCartPrdct(data._id)} >Remove </button></div>

</div>



</div>
<div className='cartheadbarder2'></div>
</div>



  )
}


<div className='totalmain2'>
<div className='total'>total </div>
<div className='total2'>RS . {totalPrice ? totalPrice : 0}</div>
</div>

<div className='totalmain2'>
<div className='total2'>Estimated Delivery Fee </div>
<div className='total2'>RS . 89</div>
</div>

<div className='cartheadbarder3'></div>

<div className='totalmain2'>
<div className='total2'>subtotal</div>
<div className='total2'>RS . {totalPrice ? totalPrice + 99 : 99}</div>
</div>


<div className='removecart2'><button onClick={BuyNow}>Place order</button></div>






</div>







    </div>
  )
}

export default Cart
