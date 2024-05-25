import { configureStore } from '@reduxjs/toolkit'
import { entityReducer } from './entity/entitySlice'

export const store = configureStore({
    reducer: {
        entity: entityReducer
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch