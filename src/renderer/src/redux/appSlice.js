import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        score: 0,
    },
    reducers: {
        addScore: (state, action) => {
            state.score += action.payload.score
        },
        resetScore: (state) => {
            state.score = 0
        }
    }
})

export const {addScore, resetScore} = appSlice.actions
export default appSlice.reducer