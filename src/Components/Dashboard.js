import React, { useState, useEffect } from 'react';
import '../App.css';
function Dashboard() {
  const [workTime, setWorkTime] = useState(1500); // 25 minutes in seconds
  const [breakTime, setBreakTime] = useState(300); // 5 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && workTime > 0) {
      interval = setInterval(() => {
        setWorkTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isActive && workTime === 0 && !isBreak) {
      clearInterval(interval);
      setIsActive(false);
      setIsBreak(true);
      setWorkTime(1500);
    } else if (isActive && breakTime > 0 && isBreak) {
      interval = setInterval(() => {
        setBreakTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isActive && breakTime === 0 && isBreak) {
      clearInterval(interval);
      setIsActive(false);
      setIsBreak(false);
      setBreakTime(300);
    }

    return () => clearInterval(interval);
  }, [isActive, workTime, breakTime, isBreak]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setWorkTime(1500);
    setBreakTime(300);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h2>Welcome, {auth.currentUser.email}!</h2>
      <div className="timer">
        {isBreak ? formatTime(breakTime) : formatTime(workTime)}
      </div>
      <div className="buttons">
        <button onClick={toggleTimer}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
}

export default Dashboard;