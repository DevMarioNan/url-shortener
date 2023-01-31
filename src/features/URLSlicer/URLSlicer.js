import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    URLS: [],
}

export const URLSlicer = createSlice({
    name: "URLSlicer",
    initialState,
    reducers: {
        addURL: (state, action) => {
            state.URLS = [ action.payload,...state.URLS];
        }
    }
});

export const { addURL,getURLs } = URLSlicer.actions;

export default URLSlicer.reducer;