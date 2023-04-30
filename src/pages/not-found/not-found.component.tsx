import '../not-found/not-found.styles.scss';

import React, { FC } from 'react';

// import GlobalButton from '../../components/global-button/global-button.component';

const PageNotFound: FC = () => {
  return (
    <div className='global-page-container'>
      <div className='pixelated-grid'></div>
      <div className='not-found-container'>
        <header className='not-found-header'>404</header>
        <h1 className='not-found-sub-header'>Page Not Found</h1>
        <p>
          The page you are looking for might have been removed, had it's name
          changed or is temporarily unavailable.
        </p>
        {/* <GlobalButton label='Return Home' route='/' /> */}
      </div>
    </div>
  );
};

export default PageNotFound;
