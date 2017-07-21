export default function(state = null, action) {
    switch(action.type) {
        case 'SELECT_CONTACT':
            let activeContact = action.payload;
            let birthdate = new Date(parseInt(activeContact.birthdate));
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            activeContact.formattedBirthdate = `${months[birthdate.getMonth()]} ${birthdate.getDate()}, ${birthdate.getFullYear()}`;
            
            return activeContact;
    }
    
    return state;
}