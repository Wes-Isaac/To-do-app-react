import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

export default function Form({ onSubmit }) {
  const [task, setTask] = useState('');

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim().length === 0) {
      window.alert('Please write item');
      return;
    }
    const newTask = {
      task,
      id: Math.floor(Math.random() * 1000) + 1,
      status: false,
    };
    // eslint-disable-next-line
    onSubmit(newTask);
    setTask('');
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <input
          onChange={onChange}
          name="title"
          placeholder="Add todo..."
          className="formInput"
          type="text"
          value={task}
        />
        <button type="submit" className="inputSubmit">
          <FaPlusCircle style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }} />
        </button>

      </form>
    </div>
  );
}
