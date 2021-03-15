import { LOGIN, LOGOUT } from "../actionTypes";

const initialState = 
  {
    email: "",
    token: "",
  };

export default function index (state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            const { token } = action.payload;
            return { token };
        }
        case LOGOUT: {
            return {};
        }
        default:
            return state;
    }
}