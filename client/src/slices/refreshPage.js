import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    refreshPage: false,
}

const refreshPageSlice = createSlice({
    name: 'refreshPage',
    initialState,
    reducers: {
        setRefreshPage: (state, action) => {
            // console.log('action.payload == ', action.payload)
            state.refreshPage = action.payload
        },

    }
})

export const { setRefreshPage } = refreshPageSlice.actions

export default refreshPageSlice.reducer



