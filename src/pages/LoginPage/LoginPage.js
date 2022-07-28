import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { authOperations } from "redux/auth";

import s from './LoginPage.module.css';

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
    <main>
      <section className={s.login}>
        <h1 className={s.title}>Log in</h1>
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label}>
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="e-mail"
              required
            />
          </label>
          <label className={s.label}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="password"
              required
            />
          </label>
          <button className={s.button} type="submit">
            Log in
          </button>
        </form>
      </section>
    </main>
  );
}