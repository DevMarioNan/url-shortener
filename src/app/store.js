import { configureStore } from '@reduxjs/toolkit';
import URLReducer from '../features/URLSlicer/URLSlicer';

export const store = configureStore({
    reducer: {
        URLReducer: URLReducer,
    }
});