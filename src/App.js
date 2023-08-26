import React from 'react';
import { AuthProvider } from './context/AuthContext';
import PomodoroApp from './Components/PomodoroApp';

function App() {
  return (
    <AuthProvider>
      <PomodoroApp />
    </AuthProvider>
  );
}
export default App;
