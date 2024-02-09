import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./redux/appSlice";

export default configureStore({
    reducer: {
        app: appSlice
    },
})