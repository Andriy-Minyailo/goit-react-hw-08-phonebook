import { NavLink } from 'react-router-dom';

export const NavLoginIn = () => {
  return (
    <>
      <NavLink to="/Register">
        <button type="button">Register</button>
      </NavLink>

      <NavLink to="/login">
        <button type="button">Log In</button>
      </NavLink>
    </>
  );
};
