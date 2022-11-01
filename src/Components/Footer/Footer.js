import React from 'react';
import './Footer.css'
import m1 from '../Images/facebook.png'
import m2 from '../Images/insta.png'
import m3 from '../Images/twit.png'



function Footer() {

    const [userEmail, setUserEmail] = React.useState('');

    const handleSubmitFeedback = () => {
        if(userEmail === ''){
            alert('Please enter your email')
            return;
        }
      
        fetch('https://emaildata-fetch-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json',
        {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
             userEmail: userEmail,
         })
       }
   )
   .then(res => res.json())
   .then(data => {
     console.log(data)
     setUserEmail('')
   })
 }


 


  return (
    <div>
        <div className="section">
            <div className="section1">
                <h3>Acciojob</h3>

            </div>

            <div className="section2">
                <ul>
                    <li>
                        <img src={m1} alt="" />

                    </li>

                    <li>
                        <img src={m2} alt="" />

                    </li>

                    <li>
                        <img src={m3} alt="" />

                    </li>
                </ul>

            </div>
        </div>

        <div className="line">
            <hr />
        </div>

        <div className="wrapper">

            <div className="subsOne">
                <p className="title">Company Info</p>
                <ul className="tile">
                    <li>About Us</li>
                    <li>Carrier</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div className="subsTwo">
                <p className="title">Leagal</p>
                <ul className="tile">
                    <li>About Us</li>
                    <li>Carrier</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div className="subsThree">
                <p className="title">Features</p>
                <ul className="tile">
                    <li>Business Marketing</li>
                    <li>User Analytic</li>
                    <li>Live Chat</li>
                    <li>Unlimited Support</li>
                </ul>
            </div>

            <div className="subsFour">
                <p className="title">Resources</p>
                <ul className="tile">
                    <li>IOS and Android</li>
                    <li>Watch a Demo</li>
                    <li>Customers</li>
                    <li>API</li>
                </ul>
            </div>

            <div className="subsFive">
                <p className="title" id='input' >Get In Touch</p>
                <input type="text" 
                  id="outlined-required"
                  placeholder='Your Email'
                  className='email'
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                 />
                 <button className='button'  onClick={handleSubmitFeedback} >Subscribe</button>

                 <div className="lorem">
                    <p className='lorem'>Lorem impsumdolor amit</p>
                 </div>
                
             
        
             
         
   
                
            </div>

        </div>


        <div className="wrapper2">
            <div className="text">
                <h6 >Made With ❤️ at Acciojob</h6>
            </div>
        </div>
      
    </div>
  )
}


export default Footer
