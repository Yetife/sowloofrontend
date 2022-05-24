import {configureStore} from '@reduxjs/toolkit'
import contentReducer from '../features/content/contentSlice'


export const store = configureStore({
    reducer: {
        contents: contentReducer
    }
})