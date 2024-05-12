import React from 'react'
import Navbarr from './Navabarr'
import './Register.css'
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import man from './img/man.jpg'
import {imgDB} from './Config'
import ratan from './img/file.png'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Register() {


  useEffect(()=>{
    AOS.init({
      duration: 1800,
easing: 'ease-in-out',
once: true
  });
  AOS.refresh();
  })

  const [check, setcheck] = useState(false)
  const [image, setimage] = useState()
  const [img, imgurl] = useState()
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  function post(e){
    e.preventDefault();

    if(isAuthenticated){
     
      var user_name = document.getElementById('name').value;
      var user_email = document.getElementById('email').value;
      var user_comp = document.getElementById('comp').value;
      var user_country = document.getElementById('country').value;
      var user_city = document.getElementById('city').value;
      var grid = document.getElementById('grid').checked;
      // let grid = document.getElementById('grid').value;
      
   setcheck(true)
   
       if(user_name !== '' && user_email !== '' && user_comp !== '' && user_country !== '' && user_city !== '' && grid){
         var send = fetch('https://feedback-10879-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json',{
           method : 'POST',
           headers : {
             'Content-Type' : 'application/json'
           },
           body : JSON.stringify({
             name : user_name,
             email : user_email,
             comp : user_comp,
             country : user_country,
             text : user_city
           })
   
         } )


         if(send){
          alert('Your Company Has Been Added');
          document.getElementById('name').value = "";
          document.getElementById('email').value = "";
          document.getElementById('comp').value = "";
          document.getElementById('country').value = "";
          document.getElementById('city').value = "";
        } 
        else{
          alert('Try After Sometime, Server Not Responding!')
        }
      }

      else{
        alert('Fill Out The Form First')
      }
       
       }
   
    
 
   
  else{
    alert('To Add Company First Login')
    
     
   
  //  fetch('https://feedback-10879-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json',{
  //    method : 'POST',
  //    headers : {
  //      'Content-Type' : 'application/json'
  //    },
  //    body : JSON.stringify({
  //      name : user_name,
  //      email : user_email,
  //      comp : user_comp,
  //      country : user_country,
  //      text : user_city
  //    })

  //  } ) || loginWithRedirect()

  } 
  }
  
  return (
    <>
<Navbarr ></Navbarr>

<div className='container bggrad shadow-lg'>

  
     
<div className='form-wrapper marginreg'>
<img src={ratan} className='img-fluid img-thumbnail float-start img col col-xl-5 col-sm-12 col-md-12 col-xs' data-aos='fade-right'/>
<form class="row g-3 " method='POST' data-aos='fade-left'>
  
  <div class="col-md-6 mb-3 mt-5">
   
    <input type="text" placeholder='Your Name' class="form-control shadow-lg" id="name" />
  </div>
  <div class="col-md-6 mb-3 mt-5">
   
    <input type="text" placeholder='Your Email' class="form-control shadow-lg" id="email" />
  </div>
  <div class="col-12 mb-3">
    
    <input type="text" placeholder='Your Company' class="form-control shadow-lg" id="comp" />
  </div>
  <div class="col-12 mb-3">
    
    <input type="text" placeholder='Your Country' class="form-control shadow-lg" id="country"  />
  </div>
  <div class="col-md-12 mb-3">
    
    <textarea placeholder='Describe Your Product' class="form-control shadow-lg pb-5" id="city" />
  </div>

 
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="grid" value='agree' checked={check} required/>
      <label class="form-check-label" for="gridCheck">
      I agree to the terms and conditions
      </label>
    </div>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary" onClick={post}>Submit</button>
  </div>
</form>

</div>
</div>
    </>
  )
}
