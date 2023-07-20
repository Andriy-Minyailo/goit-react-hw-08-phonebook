// import { NavLink } from 'react-router-dom';

import { NavLoginIn } from 'components/NavLoginIn/NavLoginIn';
import { NavStatic } from 'components/NavStatic/NavStatic';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <NavStatic />
      {isLoggedIn ? <UserMenu /> : <NavLoginIn />}
    </>
  );
};
