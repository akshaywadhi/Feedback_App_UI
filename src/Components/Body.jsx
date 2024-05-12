import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import feedback from './img/chat.png';
import review from './img/customer-review.png';
import './Body.css';
import gear from './img/gear.png'
import { useState } from 'react';
import feedimg from './img/customer-rating.png'
import feedimg2 from './img/good-feedback.png'
import girl from './img/woman-posing-pink-wall-with-right-hand-air.png'
import Footer from './Footer';


export default function Body() {

  

  const [data, setdata] = useState()
    useEffect(() => {
        AOS.init({
            duration: 1800,
    easing: 'ease-in-out',
    once: true
        });
        AOS.refresh();
        fetch('https://feedback-10879-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json')

        .then(res=>{
          return res.json()
        })
      
        .then(data=>{
          console.log(data)
          let first = []
          for(let key in data){
            console.log(data[key])
      first.push(

        <div class="card col-12 col-xl-4 col-lg-4 col-md-4 mx-4 mb-3 shadow-lg bg-filter" style={{width: '25rem'}}  data-aos='fade-left'>
      
          <div class="card-body">
            <h5 class="card-title fw-bold display-6 text-danger">{data[key].comp}</h5>
            <h5 class="card-title">{data[key].name}</h5>  <br/>
            <h6 className='text-secondary'>{data[key].text} </h6>
        
          </div>
        </div>
        )
          }
      
          setdata(first)
        })

      }
      
      , []);

  


  return (
    <div className='backgrade'>
    <div className='container-fluid text-center' >
        <div className='justice'>
        <div>
        <img className='img-fluid float-start custom-img mt-5' src={feedback} data-aos="fade-up" />
        </div>
        <div data-aos="flip-right">
        <h3 className="text-grey display-3 fw-bold">
        Sharing Your Opinion By 
</h3>
<h1> <small className="text-warning display-3 fw-bold rating">Rating Products & Brands</small></h1>
<h3 className="text-grey display-3 fw-bold mb-5"> Around The World</h3>
   </div>

     <div>
        <img className='img-fluid float-end custom-img mt-1' src={review} data-aos="zoom-in" />
     </div>
     </div>
     <span class="btn btn-primary btn-lg fs-3 fw-bold mb-5 mb-lg-5" data-aos="zoom-in">Join Now</span>
  

<img className='img-fluid img-thumbnail mx-4 mb-3 radius' src={girl} data-aos="zoom-in" />

     <div className='margin-top'>
  <img src={feedimg} class="img-fluid radius custom-img float-start" alt="..."  data-aos="fade-right"></img>
  <img src={feedimg2} class="img-fluid radius custom-img float-end" alt="..."  data-aos="fade-left"></img>
  </div>
     <div className='container-fluid text-center'>
        <img src={gear} className='custom-img custom-img2 pt-3' data-aos='zoom-in-down' />
        <h1 className='text-center text-white pt-3 mb-3 jersy'>See How It Works In<span className='text-danger'> 3 Simple Steps</span></h1>
        <h4 >Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing. </h4>
          <h4 className='mb-5'>ullamcorper mattis, pulvinar dapibus leo.</h4>

        

<div className='container-fluid row d-flex align-item-center justify-content-center'>

        <div class=" col-12 col-xl-4 col-lg-4 col-md-4 mx-4 mb-3 shadow-lg bg-filter"  style={{width: '25rem'}} data-aos='fade-right'>
        <i class="bi bi-gear-fill fs-1 text-warning"></i>
  <div class="card-body">

    <h5 class="card-title fw-bold display-6 text-danger">Sign Up For</h5>
    <h5 class="card-title">Free</h5>
    <br/>
    <h6 className='text-secondary'>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h6>
    
  </div>
</div>




<div class="col-12 col-xl-4 col-lg-4 col-md-4 mx-4 mb-3 shadow-lg bg-filter " style={{width: '25rem'}}  data-aos='fade-left'>
<i class="bi bi-emoji-smile-fill fs-1 text-warning display"></i>
  <div class="card-body">
    <h5 class="card-title fw-bold display-6 text-danger">Paricipate In</h5>
    <h5 class="card-title">Surveys</h5>  <br/>
    <h6 className='text-secondary'>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h6>

  </div>
</div>


 
<div class="col-12 col-xl-4 col-lg-4 col-md-4 mx-4 mb-3 shadow-lg bg-filter" style={{width: '25rem'}} data-aos='zoom-out-up' >
<i class="bi bi-star-fill fs-1 text-warning"></i>
  <div class="card-body">
    <h5 class="card-title fw-bold display-6 text-danger">Earn</h5>
    <h5 class="card-title">Experiences</h5>  <br/>
    <h6 className='text-secondary'>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h6>
   
    
  </div>
</div>
    


</div>

<hr/><hr/>
<div className='container container-fluid mt-3'>
<h1  className='jersy mx-5 text-warning'>Trusted Companies</h1>
<hr/><hr/>

<div className='container-fluid row d-flex align-item-center justify-content-center'>

  {data}
</div>
</div>

<Footer></Footer>
       
    </div>

   
   
    </div>
  
   
    </div>
  )
}
