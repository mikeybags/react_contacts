import axios from 'axios';

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const SELECT_CONTACT = 'SELECT_CONTACT';

export function fetchContacts() {
    const endpoint_url = 'https://s3.amazonaws.com/technical-challenge/Contacts_v2.json'
    const request = axios.get(endpoint_url)

    return {
        type: FETCH_CONTACTS,
        payload: request
    }
}

export function selectContact(contact) {
    return {
        type: SELECT_CONTACT,
        payload: contact
    }
}