import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import s from './RegisterPage.module.css';

export default function LoginPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

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

  const handleSubmit = event=> {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
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
         label="Name"
         type="text"
         name="name"
         value={name}
         onChange={handleChange}
         placeholder="name"
         autoComplete="off"
         required
        />
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
        Sign up
      </button>
    </div>
    </Box>
  );

  }
    
    
    
    