import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operationsAuth';

export const Login = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [show, setShow] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setUserData(prevState => ({ ...prevState, [name]: value }));
  };

  const sendUserForm = e => {
    console.log(userData);
    e.preventDefault();
    dispatch(login(userData));
    setUserData({
      email: '',
      password: '',
    });
  };
  const onClickShow = () => setShow(!show);
  return (
    <>
      <form onSubmit={sendUserForm}>
        <h2>Log In</h2>
        <input
          name="email"
          placeholder="Email"
          value={userData.email}
          type="email"
          onChange={handleChange}
          required
        ></input>
        <input
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
          placeholder="Password"
          type={show ? 'text' : 'password'}
        ></input>
        <button type="button" onClick={onClickShow}>
          {show ? 'Hide' : 'Show'}{' '}
        </button>
        <button type="submit">Log in</button>
      </form>
    </>
  );
};
