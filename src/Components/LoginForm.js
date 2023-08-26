import React, { useState } from 'react';
import firebase from '../firebase';
import '../App.css';
import Login from './Login';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div class="mb-3"></div>
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}><Login /></button>
    </div>
  );
}

export default LoginForm;
