import React from 'react';
import classes from './HomePage.module.scss';
import SideBarPage from '../SideBarPage/SideBarPage';
import TimeSheetPage from '../TimeSheetPage/TimeSheetPage';
import Navbar from '../Navbar/Navbar';

const HomePage = () => {
  return (
    <div className={classes['parent-main-container']}>
      <Navbar />

      <div className={classes['parent-container']}>
        <SideBarPage />
        <TimeSheetPage />
      </div>
    </div>
  );
};

export default HomePage;
