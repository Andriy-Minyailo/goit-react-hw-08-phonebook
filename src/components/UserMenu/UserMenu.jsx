import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from 'redux/auth/operationsAuth';
import { selectUserName } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  console.log(userName);
  return (
    <>
      <p>{userName}</p>
      <button
        type="button"
        onClick={() => dispatch(logout()).then(() => navigate('/'))}
      >
        Logout
      </button>
    </>
  );
};
