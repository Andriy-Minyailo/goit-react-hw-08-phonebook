import { NavLink } from 'react-router-dom';

export const NavLoginOut = () => {
  return (
    <>
      <p>Name</p>
      <NavLink>
        <button
          type="button"
          // onClick={() => dispatch(logout()).then(() => navigate('/'))}
        >
          Logout555
        </button>
      </NavLink>
    </>
  );
};
