import React from 'react';

import './button.scss';

interface ButtonProps {
  varient?: string;
  backgroundColor?: string;
  size?:string;
  label?: string;
  onClick?: () => void;
}

export const Button = ({
  backgroundColor,
  varient,
  size,
  label,
  ...props
}:ButtonProps) => {
  const mode = `button--${varient}`;
  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode].join(' ')}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};