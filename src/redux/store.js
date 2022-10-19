import {configureStore} from "@reduxjs/toolkit";
import TyperSlice from "./TyperSlice";


export const store = configureStore({
    reducer: {
        typer : TyperSlice
    }
})