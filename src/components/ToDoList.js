import React, { useState } from 'react';
import Form from './Form';
import ListItem from './ListItem';

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const onSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteHandler = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <p className="title">TODOS</p>
      <Form onSubmit={onSubmit} />
      {tasks.map((task) => (
        <ListItem
          deleteHandler={() => deleteHandler(task.id)}
          task={task.task}
          key={task.id}
        />
      ))}
    </div>
  );
}
