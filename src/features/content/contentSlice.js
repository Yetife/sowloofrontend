import { createSlice } from '@reduxjs/toolkit'
import { contents } from "../../data";

const initialState = contents

const contentSlice = createSlice({
        name: 'contents',
        initialState,
        reducers: {}
    })

export const selectAllContents = (state) => state.contents

export default contentSlice.reducer