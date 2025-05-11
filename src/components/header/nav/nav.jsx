import React from "react";
import './nav.css';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import { Link } from 'react-router-dom';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';


const Nav = () => {
    return (
        <div className='nav d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row position-relative'>
                    {/* Category Button */}
                    <div className='col-sm-3 part1 d-flex align-items-center'>
                        <Button className='bg-g text-white catTab'>
                            <GridViewIcon />&nbsp;Browse All Categories
                            <KeyboardArrowDownIcon />
                        </Button>
                    </div>

                    {/* Navigation Menu */}
                    <div className='col-sm-7 part2 position-static'>
                        <nav>
                            <ul className='list list-inline mb-0'>
                                <li className='list-inline-item'><Button><Link>Home</Link></Button></li>
                                <li className='list-inline-item'><Button><Link>About</Link></Button></li>
                                <li className='list-inline-item'><Button><Link>Shop</Link></Button></li>
                                <li className='list-inline-item'><Button><Link>Vendors</Link></Button></li>
                                <li className='list-inline-item position-static'><Button><Link>Mega Menu <KeyboardArrowDownIcon /></Link></Button>
                                
                                <div className='dropdown_menu megaMenu w-100'>
                               <div className='row'>
                                  
                                <div className='col'>
                                <h4 className='text-g'>Fruits & Vegetables</h4>
                                <ul className='mt-4 mb-0'>
                                <li><Link to=""> Meat & Poultry</Link></li>
                                <li><Link to=""> Fresh Vegetables</Link></li>
                                <li><Link to=""> Herbs & Seasonings</Link></li>
                                <li><Link to=""> Cuts & Sprouts</Link></li>
                                <li><Link to=""> Exotic Fruits & Veggies</Link></li>
                                <li><Link to=""> Meat & Poultry</Link></li>



                                </ul>



                                </div>
                                <div className='col'>
                                <h4 className='text-g'>Breakfast & Dairy</h4>



                                <ul className='mt-4 mb-0'>
                                <li><Link to=""> Meat & Poultry</Link></li>
                                <li><Link to=""> Fresh Vegetables</Link></li>
                                <li><Link to=""> Herbs & Seasonings</Link></li>
                                <li><Link to=""> Cuts & Sprouts</Link></li>
                                <li><Link to=""> Exotic Fruits & Veggies</Link></li>
                                <li><Link to=""> Meat & Poultry</Link></li>



             </ul>
         </div>

     <div className='col'>
    <h4 className='text-g'>Meat & Seafood</h4>

    <ul className='mt-4 mb-0'>
            <li><Link to=""> Meat & Poultry</Link></li>
        <li><Link to=""> Fresh Vegetables</Link></li>
     <li><Link to=""> Herbs & Seasonings</Link></li>
        <li><Link to=""> Cuts & Sprouts</Link></li>
     <li><Link to=""> Exotic Fruits & Veggies</Link></li>
         <li><Link to=""> Meat & Poultry</Link></li>


     </ul>
     </div>
                                 
     <div className='col'>
     <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png" className='w-100'/>



                                </div>




                               </div>

                                </div>
                                
                                
                                </li>
                                <li className='list-inline-item'><Button><Link>Blog</Link></Button></li>
                                <li className='list-inline-item'><Button><Link>Pages <KeyboardArrowDownIcon /></Link>
                                   
<div className='dropdown_menu'>
<ul>
<li><Button><Link to="/about">About us</Link></Button></li>
<li><Button><Link to="/contact">Contact</Link></Button></li>
<li><Button><Link to="/account">My Account</Link></Button></li>
<li><Button><Link to="/login">Login</Link></Button></li>
<li><Button><Link to="/register">Register</Link></Button></li>
<li><Button><Link to="/forgot-password">Forgot password</Link></Button></li>
<li><Button><Link to="/reset-password">Reset password</Link></Button></li>
<li><Button><Link to="/purchase-policy">Purchase Policy</Link></Button></li>
<li><Button><Link to="/terms">Terms of Services</Link></Button></li>
<li><Button><Link to="/404">404 pages</Link></Button></li>

</ul>


</div>
                                
                                </Button></li>
                                <li className='list-inline-item'><Button><Link>Contact</Link></Button></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Phone Number & Support Info */}
                    <div className='col-sm-2 part3 d-flex align-items-center'>
                        <div className='phNo d-flex align-items-center ml-auto'>
                            <span><HeadphonesOutlinedIcon />
                            </span>
                            <div className='info ml-3'>
                            <h3 className='text-g mb-0'>1900-888</h3>
                            <p className='mb-0'>24/7 Support Center</p>
                        </div>
                    </div>
                </div></div>
            </div>
        </div>
    );
}

export default Nav;
