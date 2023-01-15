import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {RootState} from "../store";
import axios from "axios";

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