import React from 'react';
import Card from '../card/Card.jsx';
import { useSelector } from 'react-redux';
import styles from './Cards.module.css';

function Cards(props) {
  const activeProjects = useSelector(state => state.allProjects);

  return (
    <div className={`overflow-y-hidden flex-grow border-black p-4 border-0 h-120 ${styles.hatch1}`}>
      <div className="grid grid-cols-2 gap-4">
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
