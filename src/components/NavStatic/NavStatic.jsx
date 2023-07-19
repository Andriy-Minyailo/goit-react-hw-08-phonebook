import { NavLink } from 'react-router-dom';

export const NavStatic = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home555</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    </>
  );
};
