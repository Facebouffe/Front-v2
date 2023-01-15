import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {RootState} from "../store";
import axios from "axios";
import {UserState} from "./userSlice";

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