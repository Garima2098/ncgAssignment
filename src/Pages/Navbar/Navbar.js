import React from 'react';
import classes from './Navbar.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CustomInput from '../../Components/CustomInput/CustomInput';
import ComapanyLogo from '../../../src/Assets/company_logo.jpg';

const Navbar = () => {
  return (
    <div className={classes['navbar-container']}>
      <div className={classes['navbar-left']}>
        <div className={classes['menu-icon']}>
          <MenuIcon />
        </div>
        <div className={classes['company-logo']}>
          <img
            
            src={ComapanyLogo}
            alt="logo"
            className={classes['logo']}
          />
          <p className={classes['company-name']}>My Tech Paradise</p>
        </div>
      </div>
      <div className={classes['navbar-right']}>
        <CustomInput
          height="1.2rem"
          placeholder="Search Here..."
          placeholderFontSize="0.5rem"
        />
        <div className={classes['navbar-notification']}>
          <NotificationsNoneOutlinedIcon style={{ height: '1rem' }} />
        </div>
        <div className={classes['navbar-profile']}>
          <AccountCircleOutlinedIcon
            style={{ color: '#BBC0BE', height: '1rem' }}
          />
          <KeyboardArrowDownOutlinedIcon
            style={{ color: '#BBC0BE', height: '1rem' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
