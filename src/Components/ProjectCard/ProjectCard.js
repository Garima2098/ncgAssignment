import React, { useState } from 'react';
import classes from './ProjectCard.module.scss';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const ProjectCard = ({
  title,
  totalHours,
  myHours,
  status,
  options,
  cardRadioHeading,
  title1,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const percentage = ((myHours / totalHours) * 100).toFixed(0);
  const cardBackground = status === 'Approved' ? '#EBFFF8' : '#F2F2F3';
  const cardBorder = status === 'Approved' ? '#44A281' : '#AEAFAE';
  const approvedButton = status === 'Approved' ? '#17EBA0' : '#FEBC45';
  const cardBelowBackground = status == 'Approved' ? '#D3E6E1' : '#DCDDDC';

  return (
    <div
      className={classes['custom-card']}
      style={{
        backgroundColor: cardBackground,
        border: `1px solid ${cardBorder}`,
      }}
    >
      <div className={classes['custom-card-heading']}>
        <div className={classes['card-title']}>
          <div className={classes['title1']}>{title1}</div>
          <div className={classes['title']}>{title}</div>
        </div>
        <div
          className={classes['cardstatus']}
          style={{ background: approvedButton }}
        >
          {status}
        </div>
      </div>
      <div className={classes['custom-card-hours']}>
        <div className={classes['total-hour']}>
          <div className={classes['total-hour-heading']}>Total Hours</div>
          <div className={classes['hours']}>{totalHours} Hours </div>
        </div>
        <div className={classes['my-hour']}>
          <div className={classes['my-hour-heading']}>My Hours</div>
          <div className={classes['myhours']}>{myHours} Hours </div>
        </div>
      </div>

      <div className={classes['progress-bar-container']}>
        <div className={classes['progress-bar']}>
          <div
            className={classes['progress']}
            style={{ width: `${percentage}%`, backgroundColor: approvedButton }}
          />
        </div>
        <div className={classes['workhour']}>
          {myHours} hours of {totalHours}
        </div>
      </div>
      <div className={classes['timesheet-heading']}>
        Select the WBS from the below to view Timesheet
      </div>
      <div
        className={classes['card-below-content']}
        style={{ backgroundColor: cardBelowBackground }}
      >
        <div className={classes['radio-content-display']}>
          <div className={classes['radio-content-heading']}>Internal Codes</div>
          <div
            style={{ outline: 'none' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <KeyboardArrowUpOutlinedIcon
                style={{ color: '#686868', height: '1rem' }}
              />
            ) : (
              <KeyboardArrowDownOutlinedIcon
                style={{ color: '#686868', height: '1rem' }}
              />
            )}
          </div>
        </div>
        <div className={classes['radio-button-container']}>
          {isOpen && (
            <div className={classes['radio-buttons']}>
              {options.map((option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="options"
                    value={option}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
