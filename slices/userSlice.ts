import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {RootState} from "../store";
import axios from "axios";

export interface UserState {
    data: {
        id: string
        name: string
        surname: string
        mail: string
        date: string
        phoneNumber: string
        address: string
        profile: string
        mentorCode: string
    }
    pending: boolean,
    error: boolean,
}

const initialState: UserState = {
    data: {
        id: "",
        name: "",
        surname: "",
        mail: "",
        phoneNumber: "",
        address: "",
        profile: "",
        mentorCode: "",
        date: ""
    },
    pending: false,
    error: false,
}

export const getUser = createAsyncThunk('user/fetchUser', async (
    userId: string,
    thunkAPI
) => {
    const response = await axios.get(`http://34.140.197.216:80/users/id/${userId}`)

    return response.data
})

export const updateUser = createAsyncThunk('user/updateUser', async (
    user: UserState['data'],
    thunkAPI
) => {
    const response = await axios.put(`http://34.140.197.216:80/users/id/${user.id}`, user)
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