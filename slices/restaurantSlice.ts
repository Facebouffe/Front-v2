import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {RootState} from "../store";
import axios from "axios";
import {getUser, updateUser, userSlice, UserState} from "./userSlice";

export interface RestaurantState {
    data: {
        id:string
        name: string
        address: string
        rate: number
        like: number
    }
    pending: boolean,
    error: boolean,
}

const initialState: RestaurantState = {
    data: {
        id: "",
        name: "",
        address: "",
        rate: 0,
        like: 0
    },
    pending: false,
    error: false,
}

export const getRestaurant = createAsyncThunk('restaurant/fetchRestaurant', async (
    RestaurantId: string,
    thunkAPI
) => {
    const response = await axios.get(`http://localhost:3000/api/restaurant/${RestaurantId}`)

    return response.data
})

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getRestaurant.pending, state => {
                state.pending = true;
            })
            .addCase(getRestaurant.fulfilled, (state, {payload}) => {
                state.pending = false;
                state.data = payload
            })
            .addCase(getRestaurant.rejected, state => {
                state.pending = false;
                state.error = true;
            })
    }
})

export const selectRestaurant = (state: RootState) => state.restaurant

export default restaurantSlice.reducer