import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {RootState} from "../store";
import axios from "axios";

export interface UserState {
    data: {
        name: string,
        surname: string,
        mail: string,
        phoneNumber: string,
        address: string,
    }
    pending: boolean,
    error: boolean,
}

const initialState: UserState = {
    data: {
        name: "Sheridan",
        surname: "Shabani",
        mail: "sheridan.shabani@outlook.fr",
        phoneNumber: "+33750440990",
        address: "11 residence des oiseaux, 62530 Hersin-Coupigny, France"
    },
    pending: false,
    error: false,
}

export const getUser = createAsyncThunk('user/fetchUser', async (
    userId: string,
    thunkAPI
) => {
    const response = await axios.get(`http://34.140.197.216:80/users/${userId}`)

    return response.data
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
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
    }
})

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer