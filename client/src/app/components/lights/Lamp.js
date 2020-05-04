import React, { useState } from 'react';
import classnames from 'classnames';

import Switch from './Switch';

import './Lamp.css';

const Lamp = () => {
  const [isLampOn, setIsLampOn] = useState(false);

  const handleToggleSwitch = (isSwitchOn) => {
    setIsLampOn(isSwitchOn);
  };

  return (
    <div className={classnames('lamp', (isLampOn) ? 'lamp--ison' : 'lamp--isoff')}>
      <Switch toggleSwitch={handleToggleSwitch} />
    </div>
  );
};

export default Lamp;