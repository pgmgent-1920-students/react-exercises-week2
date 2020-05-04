import React, { useEffect, useState } from 'react';

import classnames from 'classnames';

const Switch = ({toggleSwitch}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchClick = (ev) => {
    ev.preventDefault();
    setIsSwitchOn(!isSwitchOn);
  };

  useEffect(() => {
    toggleSwitch(isSwitchOn);
  }, [isSwitchOn]);

  return (
    <div className={classnames('switch', (isSwitchOn) ? 'switch--ison' : 'switch--isoff')} onClick={handleSwitchClick}></div>
  );
};

export default Switch;