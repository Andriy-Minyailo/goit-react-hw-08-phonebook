import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshCurrentUser } from './operetionsAuth';

// const handlePending = state => {
//   state.contacts.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.contacts.isLoading = false;
//   state.contacts.error = action.payload;
// };

// const initialUser = {
//   name: '',
//   email: '',
//   password: '',
//   isLoading: false,
//   error: null,
// };

// export const contactsList = createSlice({
//   name: 'user',
//   initialState: {
//     contacts: {
//       items: [],
//       isLoading: false,
//       error: null,
//     },
//     filter: '',
//   },
//   reducers: {
//     filterValue: {
//       reducer(state, { payload }) {
//         state.filter = payload;
//       },
//       prepare(query) {
//         return {
//           payload: query,
//         };
//       },
//     },
//   },

//   extraReducers: {
//     [fetchContacts.pending]: handlePending,
//     [fetchContacts.fulfilled](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = null;
//       state.contacts.items = action.payload;
//     },
//     [fetchContacts.rejected]: handleRejected,

//     [addContact.pending]: handlePending,
//     [addContact.fulfilled](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = null;
//       state.contacts.items.push(action.payload);
//     },
//     [addContact.rejected]: handleRejected,

//     [deleteContact.pending]: handlePending,
//     [deleteContact.fulfilled](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = null;
//       const index = state.contacts.items.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.contacts.items.splice(index, 1);
//     },
//     [deleteContact.rejected]: handleRejected,
//   },
// });

// export const { filterValue } = contactsList.actions;
// export const contactsReducer = contactsList.reducer;
