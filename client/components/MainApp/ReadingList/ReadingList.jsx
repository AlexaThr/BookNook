import React from 'react';
import ToReadList from './ToReadList.jsx';
import ReadList from './ReadList.jsx';
import Recommendations from './Recommendations.jsx';

const ReadingList = () => {
  return (
    <div className="reading-list">
      <ToReadList />
      {/* <ReadList />
      <Recommendations /> */}
    </div>
  );
};

export default ReadingList;

