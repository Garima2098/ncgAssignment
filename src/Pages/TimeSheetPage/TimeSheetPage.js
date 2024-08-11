import React from 'react';
import classes from './TimeSheetPage.module.scss';
import Calendar from './Calender/Calender';

const TimeSheetPage = () => {
  const timeSheetData = [
    {
      id: 1,
      text: 'Total Hour',
      hour: 168,
    },
    { id: 2, text: 'Total Bilable Hour', hour: 96 },
    { id: 3, text: 'Total Non Bilable Hour', hour: 52 },
    { id: 4, text: ' My Total Hour', hour: 240 },
  ];

  return (
    <div className={classes['timesheet-container']}>
      <div className={classes['timesheet-main-data']}>
        <div className={classes['my-timesheet']}>My Timesheet</div>
        <div className={classes['project-id']}>Project ID</div>
        <div className={classes['id-no']}>Project ID 1.22.365990</div>
      </div>
      <div className={classes['hour-tracker']}>
        {timeSheetData.map((hr) => (
          <div className={classes['hour-tracker-content']}>
            <div className={classes['hour-tracker-text']}>{hr.text}</div>
            <div className={classes['hour']}>{hr.hour} Hours</div>
          </div>
        ))}
      </div>
      <div className={classes['calender-timesheet']}>
        <Calendar />
      </div>
    </div>
  );
};

export default TimeSheetPage;
