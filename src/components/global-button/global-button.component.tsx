import './global-button.styles.scss';

import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface GlobalButtonProps {
  label: string;
  route: string;
}

const GlobalButton: FC<GlobalButtonProps> = ({ label, route }) => {
  return (
    <div className="global-button-container">
      <Link to={route} className="global-button">
        {label}
      </Link>
    </div>
  );
};

export default GlobalButton;
