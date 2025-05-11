import React from "react";

import Slider from './slider/index';
import CatSlider from '../../components/catSlider';
import Banners from '../../components/banners';
import './style.css';
import Product from '../../components/product';
const Home =()=>{
return (
<>
    <Slider/>
    <CatSlider/>
    <Banners/>

<section className='homeProducts'>
<div className='container-fluid'>
<div className='d-flex align-items-center'>

<h2 className='hd mb-0 mt-0'> Popular Products</h2>

<ul className='list list-inline ml-auto filterTab'>

<li className='list list-inline-item'>
<a className='cursor'>All</a>
</li>

<li className='list list-inline-item'>
<a className='cursor'>Milks & Dairies</a>
</li>

<li className='list list-inline-item'>
<a className='cursor'>Coffee & Tea</a>
</li>

<li className='list list-inline-item'>
<a className='cursor'>Pet Food</a>
</li>

<li className='list list-inline-item'>
<a className='cursor'>Meat</a>
</li>

<li className='list list-inline-item'>
<a className='cursor'>Vegetables</a>
</li>

<li className='list list-inline-item'>
<a className='cursor'>Fruits</a>
</li>



</ul>



</div>

<div className='productRow'>
<div className='item'>

<Product/>

</div>

<div className='item'>

<Product/>

</div>
<div className='item'>

<Product/>

</div>
<div className='item'>

<Product/>

</div>
<div className='item'>

<Product/>

</div>

</div>




</div>


</section>



    </>
)



}
export default Home;