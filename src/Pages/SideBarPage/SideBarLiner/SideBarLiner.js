import React from 'react';
import classes from './SideBarLiner.module.scss';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';

const SideBarLiner = () => {
  return (
    <div className={classes['sidebarliner-container']}>
      <EventRepeatOutlinedIcon
        style={{
          color: 'white',
          marginTop: '2rem',
          height: '1.4rem',
          width: '1.2rem',
        }}
      />

      <RequestQuoteOutlinedIcon
        style={{
          color: 'white',
          marginTop: '1rem',
          height: '1.4rem',
          width: '1.2rem',
        }}
      />
    </div>
  );
};

export default SideBarLiner;
