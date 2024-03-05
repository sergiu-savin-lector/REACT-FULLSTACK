import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../pages/common/service/authService";

// initialize userToken from local storage
const userToken = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : null;

const initialState = {
    isAuthenticated: false,
    status: 'idle',
    loading: false,
    email: null,
    userToken,
    error: null,
    success: false
}    

export const loginUser = createAsyncThunk('auth/login', async (payload) => {
    const { data } = await authService.login(payload)

    localStorage.setItem('token', data.accessToken)

    return data;
})

export const registerUser = createAsyncThunk('auth/register', async (payload) => {
    const { data } = await authService.register(payload)

    localStorage.setItem('token', data.accessToken)

    return data;
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state, action) => {
            state.status = 'loading';
            state.loading = true;
            state.error = null;
            state.isAuthenticated = false;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.loading = false;
            state.isAuthenticated = true;
            state.email = action.payload.user.email;
            state.userToken = action.payload.accessToken
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.status = 'failed';
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.error.message;
        })
        .addCase(registerUser.pending, (state, action) => {
            state.status = 'loading';
            state.loading = true;
            state.error = null;
            state.isAuthenticated = false;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.loading = false;
            state.isAuthenticated = true;
            state.email = action.payload.user.email;
            state.userToken = action.payload.accessToken
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.status = 'failed';
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.error.message;
        })
    }
})

export const authReducer = authSlice.reducer;