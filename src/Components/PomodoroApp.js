import React from 'react';
import { useAuth } from '../context/AuthContext';
import Timer from './Timer';
import LoginForm from './LoginForm';

function PomodoroApp() {
  const user = useAuth();

  return (
    <div>
      {user ? <Timer /> : <LoginForm />}
    </div>
  );
}

export default PomodoroApp;