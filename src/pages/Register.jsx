import { useState } from 'react';

export const Register = () => {
  const [newUser, setNewUser] = useState({
    nameUser: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setNewUser(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <form>
        <h2>Register</h2>
        <input
          name="nameUser"
          // label="name"
          type="text"
          onChange={handleChange}
          value={newUser.nameUser}
          placeholder="Name"
          required
        ></input>
        <input
          name="email"
          placeholder="Email"
          value={newUser.email}
          type="email"
          onChange={handleChange}
          required
        ></input>
        <input
          name="password"
          value={newUser.password}
          onChange={handleChange}
          required
          placeholder="Password"
          type="password"
        ></input>
        <button type="button">Register</button>
      </form>
    </>
  );
};
