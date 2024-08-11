import React from 'react';
import classes from './DayBox.module.scss';

const DayBox = ({
  day,
  hours1,
  hours2,
  onHoursChange,
  color,
  isWeekend,
  isToday,
}) => {
  return (
    <div
      className={classes['day-box']}
      style={{ backgroundColor: isWeekend ? 'white' : '#f9f9f9' }}
    >
      <div className={`${classes['day']} ${isToday ? classes['today'] : ''}`}>
        {day}
      </div>
      {!isWeekend && (
        <div className={classes['day-input-conatiner']}>
          <div className={classes['input-left']}>
            <input
              type="number"
              value={hours1}
              onChange={(e) => onHoursChange(day, 1, e.target.value)} // First input
              min="0"
              max="24"
            />
          </div>

          <div className={classes['line']}></div>
          <div className={classes['input-right']}>
            <input
              type="number"
              value={hours2}
              onChange={(e) => onHoursChange(day, 2, e.target.value)} // Second input
              min="0"
              max="24"
            />
          </div>
          <div
            className={classes['input-right-color']}
            style={{ backgroundColor: color }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default DayBox;
