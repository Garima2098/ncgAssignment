import React from 'react';
import classes from './CustomButton.module.scss';

const CustomButton = ({
  borderColor,
  backgroundColor,
  borderRadius,
  textColor,
  onClick,
  children,
}) => {
  return (
    <button
      className={classes['custom-button']}
      style={{
        borderColor,
        backgroundColor,
        borderRadius,
        color: textColor,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
