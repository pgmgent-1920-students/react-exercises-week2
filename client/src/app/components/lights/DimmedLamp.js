import React, { useState } from 'react';
import classnames from 'classnames';

import Dimmer from './Dimmer';

import './DimmedLamp.css';

const DimmedLamp = () => {
  const [lampColor, setLampColor] = useState(`rgb(0, 0, 0)`);
  
  const handleDimmer = (v) => {
    console.log(v);
  };

  return (
    <div className={classnames('dimmed-lamp')}>
      <Dimmer val={handleDimmer} />
    </div>
  );
};

export default DimmedLamp;