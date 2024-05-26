import { configureStore } from '@reduxjs/toolkit'
import { entityReducer } from './entity/entitySlice'
import { newEntityReducer } from './newEntity/newEntitySlice'

export const store = configureStore({
    reducer: {
        entity: entityReducer,
        newEntity: newEntityReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['fetchEntities/fulfilled', 'fetchEntities/rejected', 'deleteEntity/fulfilled', 'deleteEntity/rejected', 'createEntity/fulfilled', 'createEntity/rejected'],
            },
        }),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch