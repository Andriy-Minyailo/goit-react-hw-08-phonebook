import { NavLink } from 'react-router-dom';

export const NavLoginIn = () => {
  return (
    <>
      <NavLink to="/register">
        <button type="button">Register55</button>
      </NavLink>

      <NavLink to="/login">
        <button type="button">Log In55</button>
      </NavLink>
    </>
  );
};
