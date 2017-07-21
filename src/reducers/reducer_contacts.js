export default function(state = null, action) {
    switch(action.type) {
        case 'FETCH_CONTACTS':
            return action.payload.data;
    }

    return state;
}