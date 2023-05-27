import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    access_token: null,
    refresh_token: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.access_token = action.payload.access_token;
            state.refresh_token = action.payload.refresh_token;
        },
        setLogout: (state) => {
            state.user = null;
            state.access_token = null;
            state.refresh_token = null;
        },
        setUser: (state, action) => {
            state.user = action.payload.user;
        },
    },
});

export const { setMode, setLogin, setLogout, setUser } = authSlice.actions;
export default authSlice.reducer;