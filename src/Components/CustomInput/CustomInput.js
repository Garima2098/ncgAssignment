import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import classes from './CustomInput.module.scss';

const CustomInput = ({
  height = '1rem',
  placeholder = 'Search Here...',
  placeholderFontSize = '0.75rem',
  width = '100%', // Default width
  backgroundColor = 'linear-gradient(to top, #effff9, #fefeff)', // Default background color
  inputColor = '#bbc0be', // Default input text color
}) => {
  return (
    <div
      className={classes['navbar-search']}
      style={{ height, width, backgroundColor }} // Set height, width, and background color
    >
      <input
        type="text"
        placeholder={placeholder}
        style={{
          height: `calc(${height} - 0.5rem)`, // Adjust input height relative to the container
          fontSize: placeholderFontSize, // Set the placeholder font size
          color: inputColor, // Set the input text color
        }}
      />
      <SearchOutlinedIcon style={{ color: '#BBC0BE', height: '1rem' }} />
    </div>
  );
};

export default CustomInput;
