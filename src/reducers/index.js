import { combineReducers } from 'redux';
import ContactsReducer from './reducer_contacts';
import ActiveContact from './reducer_active_contact';

const rootReducer = combineReducers({
    contacts: ContactsReducer,
    activeContact: ActiveContact
});

export default rootReducer;
