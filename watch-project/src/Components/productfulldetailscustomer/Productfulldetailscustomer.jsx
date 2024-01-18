import React,{useEffect,useState} from 'react'
import axios from 'axios';
import "./productfulldeatilscustomer.scss"
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
// import { Link } from 'react-router-dom';

const Productfulldetailscustomer = () => {
   
    let Size;
    const {id}=useParams()
   
    const [getProducts,setProduct]=useState({
        cust_id:"",
        prod_id:"",
        productname:"",
        categoryname:"",
        price:"",
        size:"",
        banner:"",
        images:[]
    })
    const [userid, setId] = useState("");
    const checkLocalStorage = async () => {
      try {
        const admintoken = JSON.parse(localStorage.getItem("usertoken"));
        if (!admintoken) {
          console.error("Token not found in localStorage");
          return;
        }
        const res = await axios.post(
          "http://localhost:3003/wholewatch/fetchcustomername",
          null,
          {
            headers: { Authorization: `Bearer ${admintoken}` },
          }
        );
        setId(res.data.id);
        console.log(userid);
      } catch (error) {
        console.error(error);
      } 
    };

    useEffect(() => {
        checkLocalStorage();
      }, []);

    

   

    const getProduct=async()=>{
        const res=await axios.get(`http://localhost:3003/wholewatch/getProduct/${id}` )
        setProduct(res.data)
        // console.log(getProducts);
    }
  
    useEffect(()=>{
        getProduct()
    },[])

    const selectSize=(e)=>{
        Size=e.target.value;
        console.log(Size);
    }

    const addToCart = async () => {
        try {
            if (!Size) {
                alert("Please select the size");
                return;
              }
          const res = await axios.post("http://localhost:3003/wholewatch/addToCart", {...getProducts,size:Size,cust_id:userid,prod_id:getProducts._id});
          console.log(res.data);
          if(res){
            alert("Added To Cart")
          }else{
            alert("Error adding product to cart. Please try again.")
          }
        } catch (error) {
            console.error("Error adding product to cart:", error);
            alert("Error adding product to cart. Please try again.");
        }
      }

      const addToWishList = async () => {
        try {
          const res = await axios.post("http://localhost:3003/wholewatch/addToWhishList", {...getProducts,size:Size,cust_id:userid,prod_id:getProducts._id});
          console.log(res.data);
          if(res){
            alert("Added To Wishlist")
          }else{
            alert("Error adding product to Wishlist. Please try again.")
          }
        } catch (error) {
            console.error("Error adding product to Wishlist:", error);
            alert("Error adding product to Wishlist. Please try again.");
        }
      };
  return (
    <div>
      <Navbar/>
        <div className="productfulldetails">
            <div className='productfulldetailssub'>
                <div className="productfulldetailleft">
                    <div className='leftimages'>
                        <div className='leftimagessub'>{getProducts.images && getProducts.images[0] && (<img src={getProducts.images[0]} alt="" />)}</div>
                        <div className='leftimagessub'>{getProducts.images && getProducts.images[0] && (<img src={getProducts.images[1]} alt="" />)}</div>
                        <div className='leftimagessub'>{getProducts.images && getProducts.images[0] && (<img src={getProducts.images[2]} alt="" />)}</div>
                        <div className='leftimagessub'>{getProducts.images && getProducts.images[0] && (<img src={getProducts.images[3]} alt="" />)}</div>
                        
                    </div>
                    <div className='bannerimg'>
                        <img src={getProducts.banner}alt="" />
                    </div>

                </div>
                <div className="productfulldetailright">
                    <div className='righttext'>
                        <div className='righttext-head'>
                        {getProducts.productname}
                        </div>
                        <div className='price'>Rs .  {getProducts.price}</div>
                        <div className='inc'>(incl. of all taxes)</div>
                        <div className='righttextborder1'></div>

                       <div className='offermain'>
                       <div className='offer'>
                            <div className='offerimg'><img src="" alt="" /></div>
                            <div>
                                <div>Get this for Rs. 749 Use Code: SLAY</div>
                                <div>Flat 25% off on minimum order value of Rs. 2499/- Limited Period Offer!</div>
                            </div>
                            
                        </div> 
                        <div className='offer'>
                            <div className='offerimg'><img src="" alt="" /></div>
                            <div>
                                <div>Get this for Rs. 849 Use Code: GET15</div>
                                <div>On minimum order value of Rs. 1999/-</div>
                            </div>
                            
                        </div>
                        <div className='offer'>
                            <div className='offerimg'><img src="" alt="" /></div>
                            <div>
                                <div>Get this for Rs. 899 Use Code: GET10</div>
                                <div>On minimum order value of Rs. 1499/-</div>
                            </div>
                            
                        </div>
                       
                       </div>

                       <select onChange={selectSize} className='select2' name="cars" id="cars">
  <option value="">Select size</option>
  <option value="size_15">15</option>
  <option value="size_16">16</option>
  <option value="size_17">17</option>
  <option value="size_18">18</option>
</select>



                       

                       

         

                        <div className='addtocart'><button onClick={addToCart}>ADD TO CART</button></div>
                        <div className='addtowishlist'><button onClick={addToWishList}><span className='addtowishlisticon'></span> Add To Whishlist</button></div>
                        
                    </div>  
                </div>
            </div>
            
        </div>

      
    </div>
  )
}

export default Productfulldetailscustomer
