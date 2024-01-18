
import React,{useState} from 'react'
import axios from 'axios';
import './userreg.scss'
import { useNavigate } from 'react-router-dom';

const Userreg = () => {
  
  
    const navigate=useNavigate()
    let Banner="";
    const[val,setVal]=useState({
      name:"",
      email:"",
      phone:"",
      password:"",
      confirmpassword:"",
      pincode:"",
      address:"",
      location:"",
      profilephoto:"",
  
      
  });
  
  
  function convertToBase64Banner(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
  }
  
  const GetBanner=async(e)=>{
    e.preventDefault()
  
    Banner=await convertToBase64Banner(e.target.files[0])
    console.log(Banner);
  }
  
  
  
  const getData=(e)=>{
  setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
  console.log(val);
  }
  
  const Registerdata=async(e)=>{
    e.preventDefault();
    console.log({...val});
    
    const res=await axios.post("http://localhost:3003/wholewatch/addcustomer",{...val,profilephoto:Banner});
      
    if(res.status!=201){
      alert("Data Not Added")
    }
    if (val.password!=val.confirmpassword){
    alert("Does not match the password")
    }
    else{
        alert("Registration succesful")
        navigate("/userlogin");
    }
    
    }
  
 
    
  return (
    <div>
          {/* <nav className="navbar navbar-light  navbar-main">
  <div className='navbarcontent'>
   
   <button className='homebtn' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> <div><HiMiniBars3CenterLeft />
   </div></button>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false"  id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
    <div className='offcanvas-header2'>
        <div className='userlogo'><CiUser /></div>
        <div className='userlogotext' >LOG IN </div>
       
    
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




   <div className='snitchlogo'><img src="../download.png" alt="" /></div>
   <div className='homeicons'>
    
    <div><CiUser /></div>
    <div><CiSearch /></div>
    <div><CiHeart /></div>
    <div><PiHandbagSimpleThin /></div>
   
   </div>
  </div>
</nav> */}

{/* ////////////////////// */}

  

   <div className='userloginhead2'>CREATE ACCOUNT</div>

  <div className='userloginform3'>

<div className='userloginform3left'>
    <label className='userloginlabel' htmlFor="">USER NAME</label>
  <div><input type="text" className='userlogininput3'  name='name' onChange={getData}    /></div>

  <label className='userloginlabel' htmlFor="">E-MAIL</label>
   <div> <input type="text" className='userlogininput3'  name='email' onChange={getData}   /></div>

  <label className='userloginlabel' htmlFor="">Phone</label>
   <div> <input type="text" className='userlogininput3'  name='phone' onChange={getData}   /></div>

   <label className='userloginlabel' htmlFor="">Password</label>
   <div> <input type="text" className='userlogininput3'  name='password' onChange={getData}   /></div>

   <label className='userloginlabel' htmlFor="">Confirm Password</label>
   <div> <input type="text" className='userlogininput3'  name='confirmpassword' onChange={getData}   /></div>

 </div>
    <div className='userloginform3right'>
       
    <label className='userloginlabel' htmlFor="">Address</label>
      <div><textarea name="address" className='userlogininput4'  id="" cols="30" onChange={getData}  rows="10"></textarea></div>

      <label className='userloginlabel' htmlFor="">Location</label>
      <div><textarea name="location" className='userlogininput4'  id="" cols="30" onChange={getData}  rows="10"></textarea></div>

      <label className='userloginlabel' htmlFor="">Pin Code</label>
   <div> <input type="text" className='userlogininput3'  name='pincode' onChange={getData}   /></div>

   <label className='userloginlabel' htmlFor="">Profile Photo</label>
  

<label  className="footer2"> 
    <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path><path d="M18.153 6h-.009v5.342H23.5v-.002z"></path></g></svg> 
    <div className='choosefile'>Choose File</div>
   <div className='file'> <input id='file'  onChange={GetBanner}  type="file" name='profilephoto'  /> </div>
    
    
  </label> 

  
  
  




    </div>
   
</div>
<div className='btnuserloginmain'> <button onClick={Registerdata} className='btnuserlogin5'>SUBMIT</button></div>

	



 <div className='footer-top-border'></div>

<div className='footer1'>
  <div className='footer-contents'>
    <div className='footer-contents-head'>VISIT OFFLINE STORE</div>
    <div className='footer-content'>Jayanagar, Bangalore:</div>
    <div className='footer-content'><a href="">Get Directions</a></div>
    <div className='footer-content'></div>

  </div>
  <div className='footer-border'></div>
  <div className='footer-contents'>
    <div className='footer-content'>Contact Us</div>
    <div className='footer-content'>FAQ</div>
    <div className='footer-content'>Blogs</div>
    <div className='footer-content'>Terms & Conditions</div>
    
    <div className='footer-content'></div>

  </div>
  <div className='footer-border'></div>
  <div className='footer-contents'>
    <div className='footer-content'>TRACK ORDER</div>
    <div className='footer-content'>PLACE RETURN/EXCHANGE REQUEST</div>
    <div className='footer-content'>RETURNS/EXCHANGE POLICY</div>
    <div className='footer-content'></div>

  </div>
  <div className='footer-border'></div>
  <div className='footer-contents'>
    <div className='footer-contents-head'>CUSTOMER CARE</div>
    <div className='footer-content'>Timings: 10 AM - 8 PM (Mon - Sun)</div>
    <div className='footer-content'>Whatsapp : +91 6366966283</div>
    <div className='footer-content'>Instagram: @snitch.co.in</div>
   
    <div className='footer-content'></div>

  </div>
 

</div>

<div className='copyright'>© 2023 SNITCH | All Rights Reserved</div>
      
    </div>
  )
}

export default Userreg
