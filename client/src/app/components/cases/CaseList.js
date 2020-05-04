import React from 'react';

import CaseListItem from './CaseListItem';

import casesData from '../../_data/cases.json';

import './CaseList.css';

const CaseList = () => {
  
  return (
    <div className="row case-list align-items-center">
      {!!casesData && casesData.map((project) => <CaseListItem key={project.id} project={project} />)}
    </div>
  );
};

export default CaseList;

/*
- https://www.guidgenerator.com/online-guid-generator.aspx
- https://currentmillis.com/
- https://jsonlint.com/
*/