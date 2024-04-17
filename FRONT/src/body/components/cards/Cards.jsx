import React from 'react';
import Card from '../card/Card.jsx';
import { useSelector } from 'react-redux';

function Cards(props) {
  // useSelector

  const activeProjects = useSelector(state => state.allProjects);

  // const activePADs = props.currentPAD.filter((PAD) => PAD.active === true);
  // const activeProjects = props.ProjectsCollectio
// console.log(activeProjects);
  return (
    <div className="overflow-y-hidden">
        <br></br>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 ">
        {activeProjects.map((PROJECT) => (
          <Card

          projectName={PROJECT?.projectName}
          category={PROJECT?.category}
          descriptions={PROJECT?.descriptions}
          media={PROJECT?.media}
          id={PROJECT?._id}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Cards;
