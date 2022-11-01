import React from 'react'
import './Navbar.css'
import img1 from '../Images/Vector.png'
import img2 from '../Images/Vector (1).png'
import img3 from '../Images/Vector (2).png'
import img4 from '../Images/Vector (3).png'
import {useSelector} from 'react-redux'  




function Navbar() {
    
const count=useSelector(state=>state.count) 


  return (
    <div>
        <div className="main">
        <div className="div1">
            <h3>Acciojob</h3>
        </div>

        <div className="div2">
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Pages</li>

            </ul>
        </div>
        <div className="div3">
            <ul>
                <li className='cartcount' >
                    
                   <span><img className='p1' src={img1} alt="" /></span>
                   <span className='myClass' > Login/Register</span>
                </li>

                <li>
                    <img className='p2' src={img2}  alt="" />
                </li>
               
                <li  className='cartcount'>
                   <span><img  className='cart' src={img3}  alt="" /> </span>
                   <span className='myClass'  >{count}</span>
         
                </li>

                <li  className='cartcount'>
                   <span><img className='cart' src={img4} alt="" /></span>
                   <span className='myClass'  >1</span>
                </li>
            </ul>
        </div>

        </div>
        
       
      
    </div>
  )
}

export default Navbar
