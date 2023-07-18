// import { NavLink } from 'react-router-dom';

import { NavLoginIn } from 'components/NavLoginIn/NavLoginIn';
import { NavStatic } from 'components/NavStatic/NavStatic';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  return (
    <>
      <NavStatic />
      <NavLoginIn />
      <UserMenu />
    </>
  );
};
