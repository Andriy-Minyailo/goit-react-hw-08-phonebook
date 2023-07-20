import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operationsAuth';

export const RegisterUser = () => {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [show, setShow] = useState(false);
  console.log(newUser);

  const handleChange = ({ target: { name, value } }) => {
    setNewUser(prevState => ({ ...prevState, [name]: value }));
  };
  const sendRegisterForm = e => {
    console.log(e);
    e.preventDefault();
    dispatch(register(newUser));
    setNewUser({
      name: '',
      email: '',
      password: '',
    });
  };
  const onClickShow = () => setShow(!show);
  return (
    <>
      <form onSubmit={sendRegisterForm}>
        <h2>Register</h2>
        <input
          name="name"
          // label="name"
          type="text"
          onChange={handleChange}
          value={newUser.name}
          placeholder="Name"
          pattern="^[a-zA-Z\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
          type={show ? 'text' : 'password'}
        ></input>
        <button type="button" onClick={onClickShow}>
          {show ? 'Hide' : 'Show'}{' '}
        </button>
        <button type="submit">Register</button>
      </form>
    </>
  );
};
