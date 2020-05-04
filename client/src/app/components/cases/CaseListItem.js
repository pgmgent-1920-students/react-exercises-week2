import React from 'react';

const CaseListItem = ({project}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card case-list__item">  
        <picture className="card-img-top">
          <img src={project.thumbnailUrl} alt={project.title} />
        </picture>      
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.synopsis}</p>
        </div>
        <div className="card-body">
  {!!project.tags && project.tags.map((tag, index) => <span className="badge badge-pill badge-light" key={index}>{tag}</span>)}
        </div>
      </div>
    </div>
  );
};

export default CaseListItem;