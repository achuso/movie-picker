import React from 'react';

const SortButton = ({ sortOrder, onSort }) => {
  return (
    <button onClick={onSort}>
      Sort {sortOrder === 'asc' ? 'Non-Alphabetically' : 'Alphabetically'}
    </button>
  );
};

export default SortButton;
