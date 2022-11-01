import React from 'react'
import './Product.css'
import axios from 'axios'

import {useDispatch, useSelector} from 'react-redux' ;




function Product() {

  const dispatch=useDispatch();
  const count=useSelector(state=>state.count)

  const [data, setdata] =React.useState([])

  React.useEffect(() => {
     
   function ecom(){
       axios.get('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
       .then(res=>{
         // console.log(res.data);
         let arr=[]
         for(const item in res.data){
             arr.push(res.data[item])
         }
         setdata(arr);
       }).catch(err=>{
         console.log(err);
       })
   }
   ecom()
   }, [])
   
 return (
   <>
   
     <div className='pro'>
      <h3>Products</h3>
      </div>
   <div className="App">
     
     {
      
       data?.map((item,index)=>{
           return (
             <div className='proList' key={index}>
               
 
                     <div className='productCardStyle' >
                       <img className='productImageStyle' src={item.productImage} />
                       <h5>{item.productName}</h5>
 
                       <div className='priceClass'>
                         <div>
                         <i class="fa-solid fa-star stars"></i>
                         <i class="fa-solid fa-star stars"></i>
                         <i class="fa-solid fa-star stars"></i>
                         <i class="fa-solid fa-star stars"></i>
                         <i class="fa-solid fa-star stars"></i>
                         </div>
 
                       <div><p><s>{item.oldPrice}/- </s>  <b>{item.newPrice}/- </b></p></div>
                       </div>
                       
                       <button className='btnClass' type='button' onClick={()=>dispatch({type:'ADD_ONE_TO_COUNTER'})}>Add To Cart</button>   
                   </div>
             </div>
           )
       })
     }
   </div>
   </>
 );
 }
  


export default Product
