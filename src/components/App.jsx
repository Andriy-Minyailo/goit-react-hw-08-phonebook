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
import { RestrictedRoute } from './Routes/PuplicRoute';
import { PrivatRoute } from './Routes/PrivateRoute';

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
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterUser />}
            />
          }
        />
        <Route
          path="/contacts"
          element={<PrivatRoute redirectTo="/login" component={<Contacts />} />}
        />
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
