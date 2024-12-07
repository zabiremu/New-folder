import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userData: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userData = action.payload;
            sessionStorage.setItem('userData', JSON.stringify(action.payload));
        },
        clearUser: (state) => {
            state.userData = null;
            sessionStorage.removeItem('userData');
        },
        hydrateUser: (state) => {
            const data = sessionStorage.getItem('userData');
            state.userData = data ? JSON.parse(data) : null;
        },
    },
});

export const { setUser, clearUser, hydrateUser } = userSlice.actions;
export default userSlice.reducer;
