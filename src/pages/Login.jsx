import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operationsAuth';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
// import { Field, Form, Formik } from 'formik';

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
        <FormControl isRequired>
          <h2>Log In</h2>
          <FormLabel>Email address</FormLabel>
          <Input
            name="email"
            placeholder="Email"
            value={userData.email}
            type="email"
            onChange={handleChange}
            required
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              name="password"
              value={userData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              type={show ? 'text' : 'password'}
            />
            <InputRightElement>
              <Button type="button" onClick={onClickShow}>
                {show ? 'Hide' : 'Show'}{' '}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormHelperText>We'll never share your password.</FormHelperText>

          <Button type="submit" colorScheme="blue">
            Log in
          </Button>
        </FormControl>
      </form>
    </>
  );
};
