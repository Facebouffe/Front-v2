import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../store";

export interface UserState {
    name: string,
    surname: string,
    mail: string,
    phoneNumber: string,
    address: string,
}

const initialState: UserState = {
    name: "Sheridan",
    surname: "Shabani",
    mail: "sheridan.shabani@outlook.fr",
    phoneNumber: "+33750440990",
    address: "11 residence des oiseaux, 62530 Hersin-Coupigny, France"
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateAddress: (state, action: PayloadAction<string>) => {
            state.address = action.payload;
        },
        updatePhoneNumber: (state, action: PayloadAction<string>) => {
            state.phoneNumber = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateAddress, updatePhoneNumber } = userSlice.actions

export const selectName = (state: RootState) => state.user.name
export const selectSurname = (state: RootState) => state.user.surname
export const selectMail = (state: RootState) => state.user.mail
export const selectPhoneNumber = (state: RootState) => state.user.phoneNumber
export const selectAddress = (state: RootState) => state.user.address

export default userSlice.reducer