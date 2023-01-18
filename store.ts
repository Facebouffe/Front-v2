import {
    Action,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
import userReducer from "./slices/userSlice"
import restaurantReducer from "./slices/restaurantSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        restaurant: restaurantReducer,
    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;