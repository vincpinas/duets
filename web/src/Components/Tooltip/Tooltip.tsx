import React from 'react';
import './Tooltip.scss';

interface TProps {
  children: any;
  text: string | JSX.Element | JSX.Element[];
  className?: string;
}

function Tooltip({ children, text, className }: TProps) {
  return (
    <div className={`toolTipWrapper ${className}`}>
      { children }
      <span className={`tooltip ${className}`}>{ text }</span>
    </div>
  )
}

export default Tooltip;
