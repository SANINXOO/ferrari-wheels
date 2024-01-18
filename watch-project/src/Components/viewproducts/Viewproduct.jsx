import React,{useEffect,useState} from 'react'
import './viewproduct.scss'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Viewproduct = () => {
  const [prod, setProd] = useState([]);
  const { categoryname } = useParams();

  const getProd = async () => {
    try {
      const res = await axios.get(`http://localhost:3003/wholewatch/getCatWiseProducts/${categoryname}`);
      console.log(res.data);
      setProd(res.data);
      // console.log(prod[0].images);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getProd();
  }, [categoryname]);
  return (
    <div>

<div className='bodyviewproducts'>
      <div className="container-fluid page-wrapper">

        {

              prod.map((data,index)=>


              <Link to={`/productfulldetails/${data._id}`} key={index}>
              
              <div  className="page-inner">
              <div className="row">
                <div className="el-wrapper">
                  <div className="box-up">
                    <img className="img" src={data.banner} alt=""/>
                    <div className="img-info">
                      <div className="info-inner">
                        <span className="p-name">{data.productname}</span>
                        <span className="p-company">{data.description}</span>
                      </div>
                      <div className="a-size">Available Size &  Stocks : 
                       <div><span className="size">15 : {data?.stock?.size_S}</span></div>
                       <div><span className="size">16 : {data?.stock?.size_M}</span></div>
                       <div><span className="size"> 17 : {data?.stock?.size_L}</span></div>
                       <div><span className="size"> 18 : {data?.stock?.size_XL}</span></div>
                      
                      
                      </div>
                    </div>
                  </div>
          
                  <div className="box-down">
                    <div className="h-bg">
                      <div className="h-bg-inner"></div>
                    </div>
          
                    <a className="cart" href="#">
                      <span className="price">${data.price}</span>
                      <span className="add-to-cart">
                        <Link to={`/editproduct/${data._id}`} className='link5'><span className="txt">Edit</span></Link>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
              
              </Link>


              )
        }


 




 

</div>
    </div>

      
    </div>
  )
}

export default Viewproduct
