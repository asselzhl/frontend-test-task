import { configureStore } from '@reduxjs/toolkit'
import { entityReducer } from './entity/entitySlice'
import { entityFormReducer } from './entityForm/entityForm'


export const store = configureStore({
    reducer: {
        entity: entityReducer,
        entityForm: entityFormReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['fetchEntities/fulfilled', 'fetchEntities/rejected', 'deleteEntity/fulfilled', 'deleteEntity/rejected', 'createEntity/fulfilled', 'createEntity/rejected', 'updateEntity/fulfilled', 'updateEntity/rejected'],
            },
        }),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch