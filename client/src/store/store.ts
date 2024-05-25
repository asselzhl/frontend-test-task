import { configureStore } from '@reduxjs/toolkit'
import { entityReducer } from './entity/entitySlice'

export const store = configureStore({
    reducer: {
        entity: entityReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['fetchEntities/fulfilled', 'fetchEntities/rejected'],
            },
        }),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch