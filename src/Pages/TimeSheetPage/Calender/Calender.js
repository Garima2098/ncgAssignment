import React, { useState } from 'react';
import classes from './Calender.module.scss';
import DayBox from '../DayBox/DayBox';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CustomButton from '../../../Components/CustomButton/CustomButton';

const Calendar = () => {
  const [month, setMonth] = useState(7);
  const [year, setYear] = useState(2024);
  const [hours, setHours] = useState({});
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const colors = ['#FEBC45', '#17EBA0', '#A5B1AD', '#FD6160'];
  const today = new Date(); // Get today's date
  const todayDate = today.getDate(); // Current date (day of the month)
  const todayMonth = today.getMonth(); // Current month (0-indexed)
  const todayYear = today.getFullYear();

  const legends = [
    {
      id: 1,
      color: '#FEBC45',
      text: 'TimeSheet Approval In Progress',
    },
    {
      id: 2,
      color: '#17EBA0',
      text: 'TimeSheet Approved',
    },
    {
      id: 3,
      color: '#A5B1AD',
      text: ' Auto TimeStamp',
    },
    {
      id: 4,
      color: '#FD6160',
      text: 'TimeStamo Rejected',
    },
  ];
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = getDaysInMonth(month, year);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handlePreviousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleHoursChange = (day, inputNumber, value) => {
    setHours((prev) => ({
      ...prev,
      [day]: {
        ...(prev[day] || { hours1: 0, hours2: 0 }),
        [`hours${inputNumber}`]: value,
      },
    }));
  };

  return (
    <div className={classes['calender-conatiner']}>
      <div className={classes['navigation-buttons']}>
        <div className={classes['navigation']}>
          <div onClick={handlePreviousMonth}>
            <KeyboardArrowLeftOutlinedIcon
              style={{ height: '15px', fontWeight: '700' }}
            />
          </div>
          <div onClick={handleNextMonth}>
            <ChevronRightOutlinedIcon style={{ height: '15px' }} />
          </div>
          <div style={{ fontSize: '13px' }}>{`${new Date(
            year,
            month
          ).toLocaleString('default', {
            month: 'long',
          })} ${year}`}</div>
        </div>
        <div className={classes['buttons']}>
          <CustomButton
            borderColor="#4BC2A7"
            backgroundColor="#F4FDFE"
            borderRadius="20px"
            textColor="#4BC2A7"
            onClick={() => console.log('Button clicked!')}
          >
            $ Expenses
          </CustomButton>
          <CustomButton
            borderColor="#4BC2A7"
            backgroundColor="#F4FDFE"
            borderRadius="20px"
            textColor="#4BC2A7"
            onClick={() => console.log('Button clicked!')}
          >
            Weekly Comments
          </CustomButton>
        </div>
      </div>
      <div className={classes['calender-child']}>
        <div className={classes['calendar-header']}>
          {daysOfWeek.map((day, index) => (
            <div
              style={{ fontSize: '13px' }}
              key={index}
            >
              {day}
            </div>
          ))}
        </div>
        <div className={classes['calendar-data']}>
          {Array(firstDayOfMonth)
            .fill(null)
            .map((_, index) => (
              <div
                key={`empty-${index}`}
                className={classes['day-box']}
              ></div>
            ))}
          {daysArray.map((day, index) => {
            const dayOfWeek = new Date(year, month, day).getDay();
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
            const isToday =
              day === todayDate && month === todayMonth && year === todayYear;
            return (
              <DayBox
                key={day}
                day={day}
                hours1={hours[day]?.hours1 || 0}
                hours2={hours[day]?.hours2 || 0}
                onHoursChange={handleHoursChange}
                color={colors[index % colors.length]}
                isWeekend={isWeekend}
                isToday={isToday}
              />
            );
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className={classes['calender-legend']}>
            <div className={classes['legend-heading']}>TimeStamp Legends</div>
            <div className={classes['legend-data']}>
              {legends.map((leg) => (
                <div
                  key={leg.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: leg.color,
                      width: '10px',
                      height: '10px',
                      marginRight: '8px',
                      borderRadius: '50%',
                    }}
                  ></div>
                  <div className={classes['legend-text']}>{leg.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              height: '1.5rem',
              marginTop: '0.5rem',
              gap: '0.5rem',
            }}
          >
            <CustomButton
              borderColor="#737373"
              backgroundColor="#EBEBEA"
              borderRadius="20px"
              textColor="#737373"
              onClick={() => alert('Timesheet is Cancelled!')}
            >
              Cancel
            </CustomButton>

            <CustomButton
              borderColor="#4BC2A7"
              backgroundColor="#4BC2A7"
              borderRadius="20px"
              textColor="white"
              onClick={() => alert('Timesheet submitted!')}
            >
              Submit Timesheet
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
