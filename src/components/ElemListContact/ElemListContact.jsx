import PropTypes from 'prop-types';
import css from './ElemListContact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ElemListContact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li className={css.list}>
        <p>
          {name}: {number}
        </p>
        <button
          className={css.btn}
          id={id}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </li>
    </>
  );
};

ElemListContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
