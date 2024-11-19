import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            let old = [...state.user, action.payload];
            localStorage.setItem('user', JSON.stringify(old));
            return {
                ...state,
                user: old
            };

        case 'delete':
            let deleteId = action.payload;
            let remove = state.user.filter((val) => val.id !== deleteId);
            localStorage.setItem('user', JSON.stringify(remove));
            
            
            toast.warning("Note deleted successfully...", {
                style: {
                    backgroundColor: 'black',  
                    color: 'white'            
                }
            });
            
            return {
                ...state,
                user: remove
            };

        default:
            return state;
    }
};

export default reducer;
