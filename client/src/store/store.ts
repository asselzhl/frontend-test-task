import { configureStore } from '@reduxjs/toolkit'
import { entityReducer } from './entity/entitySlice'
import { entityFormReducer } from './entityForm/entityForm'
import { useDispatch } from 'react-redux'
import { queryFormCoordinatesReducer } from './queryFormCoordinates/queryFormCoordinatesSlice'


export const store = configureStore({
    reducer: {
        entity: entityReducer,
        entityForm: entityFormReducer,
        queryFormCoordinates: queryFormCoordinatesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    'fetchEntities/fulfilled',
                    'fetchEntities/rejected',
                    'deleteEntity/fulfilled',
                    'deleteEntity/rejected',
                    'createEntity/fulfilled',
                    'createEntity/rejected',
                    'updateEntity/fulfilled',
                    'updateEntity/rejected'
                ],
            },
        }),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()