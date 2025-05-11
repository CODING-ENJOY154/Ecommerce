import React, { useState, useEffect } from 'react';
import '../header/header.css';
import Logo from '../../assets/images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
import axios from 'axios';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import IconCompare from '../../assets/images/icon-compare.svg';
import IconHeart from '../../assets/images/icon-heart.svg';
import IconUser from '../../assets/images/icon-user.svg';
import IconCart from '../../assets/images/icon-cart.svg';
import Button from '@mui/material/Button';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Nav from './nav/nav';


const Header = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [categories] = useState([
    'Milks & Dairies', 'Wines & Drinks', 'Cloths & beauty', 'Fresh Seafood',
    'Pet Foods & Toy', 'Fast Food', 'Baking Material', 'Vegetables',
    'Fresh Fruit', 'Bread and Juice', 'Milks & Dairies', 'Wines & Drinks',
    'Cloths & beauty', 'Fresh Seafood'
  ]);
  
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    getCountry('https://countriesnow.space/api/v0.1/countries/');
  }, []);

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      if (response.data && response.data.data) {
        setCountryList(response.data.data.map(item => item.country));
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
    <header>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-2'>
            <img src={Logo} alt="Logo" />
          </div>

          {/* Header Search */}
          <div className='col-sm-5'>
            <div className='headerSearch d-flex align-items-center'>
              <Select data={categories} placeholder={'All Categories'} icon={false} />
              <div className='search'>
                <input type='text' placeholder='Search for items..' />
                <SearchIcon className='searchIcon cursor' />
              </div>
            </div>
          </div>

          {/* Header Actions */}
          <div className='col-sm-5 d-flex align-items-center'>
            <div className='ml-auto d-flex align-items-center'>

              {/* Location Selector */}
              <div className='countryWrapper'>
                <Select 
                  data={countryList} 
                  placeholder={'Your location'} 
                  icon={<LocationOnOutlinedIcon style={{ opacity: '0.7' }} />} 
                />
              </div>

              <ClickAwayListener onClickAway={() => setIsOpenDropDown(false)}>
                <ul className='list list-inline mb-0 headerTabs'>

                  <li className='list-inline-item'>
                    <span>
                      <img src={IconCompare} alt="Compare" />
                      <span className='badge bg-success rounded-circle'>3</span>
                      Compare
                    </span>
                  </li>
                  &nbsp; 
                    <li className='list-inline-item' style={{ paddingLeft: "6px" }}>
                    <span>
                      <img src={IconHeart} alt="Wishlist" />
                      <span className='badge bg-success rounded-circle' style={{ paddingLeft: "10px" }}>2</span>
                      Wishlist
                    </span>
                  </li>
                  &nbsp;  &nbsp;
                  <li className='list-inline-item' style={{ paddingLeft: "6px" }}>
                    <span>
                      <img src={IconCart} alt="Cart" />
                      <span className='badge bg-success rounded-circle' style={{ paddingLeft: "6px" }}>6</span>
                      Cart
                    </span>
                  </li>

                  {/* Account Dropdown */}
                  &nbsp;  &nbsp;  &nbsp;
                  <li className='list-inline-item'>
                    <span onClick={() => setIsOpenDropDown(!isOpenDropDown)}>
                      <img src={IconUser} alt="User Account" />
                      Account
                    </span>
                    {isOpenDropDown && (
                      <ul className='dropdownMenu'>
                        <li><Button className='align-items-center'><AccountCircleOutlinedIcon /> My Account</Button></li>
                        <li><Button><AddLocationAltOutlinedIcon /> Order Tracking</Button></li>
                        <li><Button><FavoriteBorderOutlinedIcon /> My Wishlist</Button></li>
                        <li><Button><SettingsOutlinedIcon /> Settings</Button></li>
                        <li><Button><ExitToAppOutlinedIcon /> Sign out</Button></li>
                      </ul>
                    )}
                  </li>

                </ul>
              </ClickAwayListener>
            </div>
          </div>
        </div>
      </div>
    </header>






    <Nav/>
    </>
  );
};

export default Header;