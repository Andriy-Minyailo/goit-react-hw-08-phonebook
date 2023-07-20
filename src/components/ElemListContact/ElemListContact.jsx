import PropTypes from 'prop-types';
import css from './ElemListContact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { editContact } from 'redux/contactsSlice';
import { useState } from 'react';

import { EditForm } from 'components/modal/modal';

export const ElemListContact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    dispatch(editContact({ id, name, number }));
    setShowModal(true);
  };

  return (
    <>
      <li className={css.list}>
        <p>
          {name}: {number}
        </p>
        <button className={css.btn} id={id} onClick={handleEditClick}>
          Edit
        </button>
        <button
          className={css.btn}
          id={id}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </li>
      {showModal && (
        <EditForm onClose={() => setShowModal(false)} showModal={showModal} />
      )}
    </>
  );
};

ElemListContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
