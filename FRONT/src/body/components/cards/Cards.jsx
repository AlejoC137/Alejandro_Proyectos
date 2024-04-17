import React from 'react';
import Card from '../card/Card.jsx';
import { useSelector } from 'react-redux';

function Cards(props) {
  const activeProjects = useSelector(state => state.allProjects);

  return (
    <div className="overflow-y-hidden border-black  border-l-2">
      <br></br>
      <div className="">
        {activeProjects.map((PROJECT) => (
          <Card
            key={PROJECT?._id}
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
