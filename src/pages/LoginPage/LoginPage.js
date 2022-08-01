import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { authOperations } from "redux/auth";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import s from '../RegisterPage/RegisterPage.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '37ch' },
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
      required
    >
    <div className={s.form} >
      <div className={s.label}>
        <TextField
          className={s.field}
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="email"
          autoComplete="off"
          required
        />
        <TextField
          className={s.field}
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="password"
          autoComplete="off"
          required
        />
      </div>
      <button className={s.button} type="submit">
        Log in
      </button>
    </div>
    </Box>
  );

}