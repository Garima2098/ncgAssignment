import React from 'react';
import classes from './SideBarPage.module.scss';
import SideBarLiner from './SideBarLiner/SideBarLiner';
import SideBarData from './SideBarData/SideBarData';

const SideBarPage = () => {
  return (
    <div className={classes['sidebar-container']}>
      <SideBarLiner />
      <SideBarData />
    </div>
  );
};

export default SideBarPage;
