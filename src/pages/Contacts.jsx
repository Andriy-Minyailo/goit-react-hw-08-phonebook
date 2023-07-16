import { Filter } from 'components/Filter/Filter';
import { FormAddContacts } from 'components/FormAddContacts/FormAddContacts';
import { ListContacts } from 'components/ListContacts/ListContacts';

export const Contacts = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <FormAddContacts />
      <h2>Contacts</h2>
      <Filter />
      <ListContacts />
    </>
  );
};
