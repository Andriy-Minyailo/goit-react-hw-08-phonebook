import { useState } from 'react';

export const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setLogin(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <form>
        <h2>Log In</h2>
        <input
          name="email"
          placeholder="Email"
          value={login.email}
          type="email"
          onChange={handleChange}
          required
        ></input>
        <input
          name="password"
          value={login.password}
          onChange={handleChange}
          required
          placeholder="Password"
          type="password"
        ></input>
        <button type="button">Log in</button>
      </form>
    </>
  );
};
