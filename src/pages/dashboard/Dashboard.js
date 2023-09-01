import React from 'react';
import {Grid,Paper,Box} from '@mui/material';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const tasks = useSelector(state => state.todo);

  // Filtra las tareas completadas y pendientes
  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Tareas Completadas</h5>
          <p className="card-text">{completedTasks.length} de {tasks.length}</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Tareas Pendientes</h5>
          <p className="card-text">{pendingTasks.length} de {tasks.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
