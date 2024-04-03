import React from 'react';
import Card from '../card/Card.jsx';

function Cards(props) {
  
  // const activePADs = props.currentPAD.filter((PAD) => PAD.active === true);
  const activeProjects = props.ProjectsCollectio

  return (
    <div className="overflow-y-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 ">
        {activeProjects.map((PROJECT) => (
          <Card

          projectName={PROJECT?.projectName}
          category={PROJECT?.category}
          descriptions={PROJECT?.descriptions}
          media={PROJECT?.media}

          />
        ))}
      </div>
      
    </div>
  );
}

export default Cards;
