import React,{useEffect,useState} from 'react'
import "./productfulldetails.scss"
import axios from 'axios'
import { Link,useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

const Productfulldetails = () => {
   
 

    const {id}=useParams()
    const [getProducts,setProduct]=useState([])
    // const navigate= useNavigate()

     const getProduct=async()=>{
        const res=await axios.get(`http://localhost:3003/wholewatch/getProduct/${id}`)
        console.log(res.data);
        setProduct(res.data)
        
    }
  
    useEffect(()=>{
        getProduct()
    },[])

    const [count,setCount]=useState(0)
    const deleteProduct = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this Category?");
     
        if (isConfirmed) {
        try {
        const res = await axios.delete(`http://localhost:3003/wholewatch/deleteproduct/${id}`);
           console.log('Category deleted:', res.data);

           
           alert("product deleted")

          } catch (error) {
           console.error('Error deleting Category:', error);
          }
        } else {
        console.log('Deletion cancelled.');
        }
        setCount(count+1)
   }
     
     useEffect(()=>{
   },[count])
   
  




  return (
    <div>
 
<div className='body10'>
      <div className="card5">
  <nav>
  <div>  <svg className="arrow" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " stroke="#727272"/></svg>

  

<Link className='link5' to={`/viewproducts/${getProducts.categoryname}`} >Back to </Link></div>

    
   


   
    <svg className="heart" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" stroke="#727272" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z" stroke="#727272"/></svg>
  </nav>
  <div className="photo">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    {getProducts.images && getProducts.images[0] && (
           <img src={getProducts.images[0]} alt="" />
                )}
    </div>
    <div className="carousel-item">
    {getProducts.images && getProducts.images[0] && (
           <img src={getProducts.images[1]} alt="" />
                )}
    </div>
    <div className="carousel-item">
    {getProducts.images && getProducts.images[0] && (
           <img src={getProducts.images[2]} alt="" />
                )}
    </div>
    <div className="carousel-item">
    {getProducts.images && getProducts.images[0] && (
           <img src={getProducts.images[3]} alt="" />
                )}
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </div>
  <div className="description">
    <h2>{getProducts.productname}</h2>
    <h4>Popular House Plant</h4>
    <h1>$  {getProducts.price}</h1>
    <p>Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.</p>
    <h4>Stock</h4>
   <div className='stock'>
   <div className='stocksub'>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
    </div>
    <div className='stocksub'>
        <div>: {getProducts?.stock?.size_15}</div>
        <div>: {getProducts?.stock?.size_16}</div>
        <div>: {getProducts?.stock?.size_17}</div>
        <div>: {getProducts?.stock?.size_18}</div>
        
    </div>
   </div>
    <button onClick={() => deleteProduct(id)} >Delete</button>

    
  </div>
</div>
    </div>
    </div>
  )
}

export default Productfulldetails
