import React, { useEffect, useState } from 'react';

import classnames from 'classnames';

const Dimmer = ({val}) => {
  const [v, setV] = useState(0);

  const handleDimmerChange = (ev) => {
    setV(ev.target.value);
  };

  useEffect(() => {
    val(v);
  }, [v]);

  return (
    <div className={classnames('dimmer')}>
      <input type="range" min="0" max="255" value={v} onChange={handleDimmerChange} />
    </div>
  );
};

export default Dimmer;