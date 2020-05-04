import React, { useState } from 'react';
import classnames from 'classnames';

import Dimmer from './Dimmer';

import './DimmedLamp.css';

const DimmedLamp = () => {
  const [lampColor, setLampColor] = useState(`rgb(0, 0, 0)`);

  const handleDimmer = (v) => {
    setLampColor(`rgb(${v}, ${v}, ${v})`);
  };

  return (
    <div className={classnames('dimmed-lamp')} style={{ backgroundColor: lampColor}}>
      <Dimmer val={handleDimmer} />
    </div>
  );
};

export default DimmedLamp;