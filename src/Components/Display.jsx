import React from 'react';

const Display = ({ value }) => {
  return (
    <div className="p-5 bg-gray-900 text-right">
      <div className="text-white text-4xl font-light overflow-hidden overflow-ellipsis">
        {value}
      </div>
    </div>
  );
};

export default Display;