import React from "react";
import Slider from "react-slick";
import './index.css';
import Slide1 from '../../../assets/images/slider-1.png';
import Slide2 from '../../../assets/images/slider-2.png';
import Button from '@mui/material/Button';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const HomeSlider=()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:true

      };
return (
<section className='homeSlider'>
<div className='container-fluid position-relative'>

<Slider {...settings} className='home_slider_Main'>
<div className='item'>
<img src={Slide1} className='w-100'/>
  
    <div className='info'>
<h2 class="mb-4">

Don't miss amazing <br/>
grocery deals
</h2>
<p>Sign up  daily for news Letter</p>
    </div>
    </div>
    <div className='item'>
<img src={Slide2}  className='w-100'/>


<div className='info'>
<h2 class="mb-4">

Fresh Vegetables<br/>
Big discount
</h2>
<p>Save up to 50% off on your first order</p>
    </div>
    </div>
    
     
    </Slider>
<div className='newsLetterBanner'>
<SendOutlinedIcon/>
<input type='text' placeholder='Your email address'/>
<Button className='bg-g'>Subscribe</Button>
</div>
</div>

</section>



)




}

export default HomeSlider;