import React , { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams} from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { CiSquareRemove } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './wishlist.scss'
import Navbar from '../Navbar/Navbar';


const Wishlist = () => {

    const { id } = useParams();
    const [getPrdct, setProdct] = useState([]);
   

    const [name, setUser] = useState("");
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
      setUser(res.data.msg);
    } catch (error) {
      console.error(error);
    } 
  };

  useEffect(() => {
    checkLocalStorage();
  }, []);

    const getPrdctDetails = async () => {
        const res = await axios.get(`http://localhost:3003/wholewatch/getWishlistProduct/${id}`);
        setProdct(res.data);
    };

    useEffect(() => {
        getPrdctDetails();
    }, []);

  


    const delProduct = async (id) => {
        const userConfirmed = window.confirm("Are you sure you want to delete this product from the wishlist?");
        if (userConfirmed) {
            try {
                const res = await axios.delete(`http://localhost:3003/wholewatch/delWishListProduct/${id}`);
                console.log(res.data);
                getPrdctDetails();
            } catch (error) {
                console.error("Error deleting product:", error);
            }
        }
    };







  return (
    <div>
     
     <Navbar/>

     <div className="wishlistmain">

        <div className="wishlistleft">
            <div className="wishlistlefttop">
                <div className='userprofile'></div>
                <div className='username2'>{name}</div>

            </div>
            <div className="wishlistleftbottom">
                <div className="wishlistleftbottomitem">
                    <div className='wishlistleftbottomicon'> <CiUser /></div>
                    <div>my profile</div>
                </div>
                <div className="wishlistleftbottomitem">
                    <div className='wishlistleftbottomicon'> <CiLocationOn /></div>
                    <div>delivery address</div>
                </div>
                <div className='wishlistleftbottomborder'></div>
                <div className="wishlistleftbottomitem">
                    <div className='wishlistleftbottomicon'> <PiHandbagSimpleThin /></div>
                    <div>my orders</div>
                </div>
                <div className='wishlistleftbottomborder'></div>
                <div className="wishlistleftbottomitem2">
                    <div className='wishlistleftbottomicon'> <div><CiHeart /></div></div>
                    <div>my wishlist</div>
                </div>

            </div>
        </div>
        <div className="wishlistright">
            {/* <div className='username '> Good Afternoon! {name}</div> */}
            <div className="wishlistrightsub">

            {getPrdct.length === 0 ? (
                   <>
                   
                    <div className="no-items-message">
                    <div>wishlist is empty !</div>
                    <div className='shp-now-btn1' ><Link className='shp-now-btn' to='/'>Shop Now</Link></div>
                    </div>
                   </>
                ) : (
                    <>
                         {
                    getPrdct.map((data, index) =>(

                        <div className='wishlistitem' key={index} >
                            <div className='removewishlistitem' onClick={()=>delProduct(data._id)}><CiSquareRemove /></div>
                         
                            <div className='wishlistitemhead'>{data.productname}</div>
                        
                           
                           
                        
                        <div className='wishlistitemimg'><img src={data.banner} alt="" /></div>
                        <div className='wishlistitemprice'>RS . {data.price}</div>
                        <select  className='select5' name="size" id="cars">
                        <option value="">Select size</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    </select>
                        <select  className='select4' name="cars" id="cars">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    </select>
    <div className='removecart3'><Link to={`/productdetailscustomer/${data._id}`}><button>Goto Details</button></Link></div>
                    </div>


                     ))
                 }
                      </>
                )}

                 {/* {
                    getPrdct.map((data, index) =>(

                        <div className='wishlistitem' key={index} >
                            <div className='removewishlistitem' onClick={()=>delProduct(data._id)}><CiSquareRemove /></div>
                         
                            <div className='wishlistitemhead'>{data.productname}</div>
                        
                           
                           
                        
                        <div className='wishlistitemimg'><img src={data.banner} alt="" /></div>
                        <div className='wishlistitemprice'>RS . {data.price}</div>
                        <select  className='select5' name="size" id="cars">
                        <option value="">Select size</option>
    <option value="s">S</option>
    <option value="m">M</option>
    <option value="l">L</option>
    <option value="xl">XL</option>
    </select>
                        <select  className='select4' name="cars" id="cars">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    </select>
    <div className='removecart3'><button  >ADD to cart</button></div>
                    </div>


                     ))
                 } */}


               
                
                

            </div>


        </div>




     </div>













    </div>
  )
}

export default Wishlist
