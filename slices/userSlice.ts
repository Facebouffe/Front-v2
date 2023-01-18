import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {RootState} from "../store";
import axios from "axios";

export interface UserState {
    data: {
        "id": string,
        "name": string,
        "surname": string,
        "mail": string,
        "password": string,
        "date": string,
        "phoneNumber": string,
        "address": string,
        "profile": string
    }
    pending: boolean,
    error: boolean,
}

const initialState: UserState = {
    data: {
        id: "818eaaea-7e91-4c98-8b11-d29411ae21fc",
        name: "test",
        surname: "test",
        mail: "test@gmail.com",
        password: "testpass0",
        date: "10/01/2023",
        phoneNumber: "+3375044045",
        address: "10 rue de la fête",
        profile: "client"
    },
    pending: false,
    error: false,
}

export const getUser = createAsyncThunk('user/fetchUser', async (
    userId: string,
    thunkAPI
) => {
    const response = await axios.get(`http://34.140.97.216:80/users/id/${userId}`)

    return response.data
})

export const updateUser = createAsyncThunk('user/updateUser', async (
    user: UserState['data'],
    thunkAPI
) => {
    const response = await axios.put(`http://34.140.97.216:80/users/id/${user.id}`, user)
    return response.data
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getUser.pending, state => {
                state.pending = true;
            })
            .addCase(getUser.fulfilled, (state, {payload}) => {
                state.pending = false;
                state.data = payload
            })
            .addCase(getUser.rejected, state => {
                state.pending = false;
                state.error = true;
            })
            .addCase(updateUser.pending, state => {
                state.pending = true;
            })
            .addCase(updateUser.fulfilled, (state, {payload}) => {
                state.pending = false;
                state.data = payload
            })
            .addCase(updateUser.rejected, state => {
                state.pending = false;
                state.error = true;
            })
    }
})

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer