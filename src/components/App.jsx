import css from './App.module.css';
// import { FormAddContacts } from './FormAddContacts/FormAddContacts';
// import { Filter } from './Filter/Filter';
// import { ListContacts } from './ListContacts/ListContacts';
import { Header } from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { Login } from 'pages/Login';
import { RegisterUser } from 'pages/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshCurrentUser } from 'redux/auth/operationsAuth';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {/* <h2>Phonebook</h2>
      <FormAddContacts />
      <h2>Contacts</h2>
      <Filter />
      <ListContacts /> */}
    </div>
  );
};
