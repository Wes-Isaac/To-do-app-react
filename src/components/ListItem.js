import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

export default function ListItem({ task, deleteHandler }) {
  const [status, setStatus] = useState(false);

  const statusHandler = () => {
    // eslint-disable-next-line
    status ? setStatus(false) : setStatus(true);
  };

  return (
    <div className="item">
      <div className={`itemLeft ${status ? 'completed' : null}`}>
        <input type="checkbox" onChange={statusHandler} />
        <p className="p" contentEditable="true">
          {task }
          {' '}
        </p>
      </div>
      <div>
        <button type="button" onChange={statusHandler} onClick={deleteHandler}>
          {' '}
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
      </div>
    </div>
  );
}
