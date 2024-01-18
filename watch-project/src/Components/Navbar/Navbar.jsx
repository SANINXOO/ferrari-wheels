import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import axios from 'axios';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [name, setUser] = useState("");
    const [userid, setId] = useState("");

     const [getPrdct, setProdct] = useState([])
    const [length,setLength]=useState(0)
    const [getPrdct2, setProdct2] = useState([])
    const [length2,setLength2]=useState(0)

          ///////////////cart-count//////////


          useEffect(() => {
            const getPrdctDetails = async () => {
              try {
                const res = await axios.get(`http://localhost:3003/wholewatch/getCartProduct/${userid}`);
                setProdct(res.data);
                setLength(res.data.length);  // Update the length state after fetching data
                
              } catch (error) {
                console.error("Error fetching cart products:", error);
              }
            };
        
    
            if (userid) {
              getPrdctDetails();
            }
          }, [userid]); 

          ///////////////wishlist-count//////////


      useEffect(() => {
        const getwishlistPrdctDetails = async () => {
          try {
            const res = await axios.get(`http://localhost:3003/wholewatch/getWishlistProduct/${userid}`);
            setProdct2(res.data);
            setLength2(res.data.length);  // Update the length state after fetching data
          } catch (error) {
            console.error("Error fetching cart products:", error);
          }
        };
    
        // Call the function when the component mounts or when the id changes
        if (userid) {
          getwishlistPrdctDetails();
          
        }
      }, [userid]); 
    
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
        setId(res.data.id);
      } catch (error) {
        console.error(error);
      } 
    };

    useEffect(() => {
        checkLocalStorage();
      }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <div className="nav-gifts">GIFTOS</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-main" id="navbarNav">

                        <div>
                            <a className="nav-link active" aria-current="page" href="#" id="change-section"><span>HOME</span></a>
                        </div>
                        <div>
                            <a className="nav-link active" href="#"><span>SHOP</span></a>
                        </div>
                        <div>
                            <a className="nav-link active" href="#"><span>WHY US</span></a>
                        </div>
                        <div>
                            <a className="nav-link active" href="#"><span>BRANDS</span></a>
                        </div>
                        <div>
                            <a className="nav-link active" href="#"><span>{name}</span></a>
                        </div>

                        {/* //////////count/////// */}

                        <div className='navIcon'>
                       <Link to={`/wishlist/${userid}`} > <FaRegHeart className='cart-icon' /></Link>
                       <div className="count">{length2}</div>
                        </div>
                        <div className='navIcon'>
                        <Link to={`/cart/${userid}`}><IoCartOutline className='cart-icon' /></Link>
                        <div className="count">{length}</div>
                        </div>

                        <div>
                            <a className="nav-link active" href="#"><span><i className="fa fa-user" aria-hidden="true"></i></span></a>
                        </div>



                        {/* <div><a className="nav-link active" href="#"><span>LOGIN</span></a></div> */}

                        {/* <div><a className="nav-link active" href="#"><span><i className="fa fa-shopping-bag"
                            aria-hidden="true"></i></span></a></div> */}


                        {/* <div> <a className="nav-link active" href="#"><span><i className="fa fa-search" aria-hidden="true"></i></span></a>
                        </div> */}


                    </div>
                    {/* <div className="display-username">
                <span className='admin-home-btn-user'><i className="fa fa-user" aria-hidden="true"></i>{msg}
                <button onClick={Logout}><i className="fa fa-sign-out logggggg" aria-hidden="true"></i></button></span>
            </div> */}
            {/* <div className="header-left">
                <Link to='/Adminlogin' className='back-btn'><FaArrowLeft /></Link>
            </div> */}

                </div>
            </nav>
    </div>
  )
}

export default Navbar
