import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/operations';
import { getToUpdate } from 'redux/selectors';
import { createPortal } from 'react-dom';
const rootModalRef = document.querySelector('#modal');

export const EditForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const editingContact = useSelector(getToUpdate);

  const [nameCurrent, setName] = useState(editingContact.name);
  const [numberCurrent, setNumber] = useState(editingContact.number);

  const handleEditForm = evt => {
    evt.preventDefault();
    dispatch(
      updateContact({
        id: editingContact.id,
        name: nameCurrent,
        number: numberCurrent,
      })
    );

    onClose();
  };
  return createPortal(
    <div open={true} onClose={onClose}>
      <label>
        <input
          label="Name"
          value={nameCurrent}
          onChange={evt => setName(evt.target.value)}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <input
          label="Phone Number"
          value={numberCurrent}
          onChange={evt => setNumber(evt.target.value)}
          name="number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <div>
        <button type="submit" onClick={handleEditForm}>
          Update
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>,
    rootModalRef
  );
};
