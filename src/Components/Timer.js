import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import firebase from '../firebase';
import Reset from './Reset';
import '../App.css';
import Pause from './Paused';
import Play from './Play';
import Logout from './Logout';

function Timer() {
    const user = useAuth();

    const [workTime, setWorkTime] = useState(1500); // 25 minutes in seconds
    const [breakTime, setBreakTime] = useState(300); // 5 minutes in seconds
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(workTime);
    const [timerLabel, setTimerLabel] = useState('Work Timer');

    useEffect(() => {
        if (isBreak) {
            setSecondsLeft(breakTime);
            setTimerLabel('Break Timer');
        } else {
            setSecondsLeft(workTime);
            setTimerLabel('Work Timer');
        }
    }, [isBreak, workTime, breakTime]);

    useEffect(() => {
        let interval;

        if (isActive && secondsLeft > 0) {
            interval = setInterval(() => {
                setSecondsLeft((prevSeconds) => prevSeconds - 1);
            }, 1000);
        } else if (isActive && secondsLeft === 0) {
            clearInterval(interval);
            setIsActive(false);
            setIsBreak(!isBreak);
        }

        return () => clearInterval(interval);
    }, [isActive, secondsLeft, isBreak]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setIsBreak(false);
        setSecondsLeft(workTime);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div>
            <h2>{timerLabel}</h2>
            <div className="timer">
                {formatTime(secondsLeft)}
            </div>
            <div className="buttons">
                <button onClick={toggleTimer}>
                    {isActive ? <Pause /> : <Play />}
                </button>
                <button onClick={resetTimer}><Reset /></button>
            </div>
            <button onClick={() => firebase.auth().signOut()}><Logout /></button>
        </div>
    );
}

export default Timer;
