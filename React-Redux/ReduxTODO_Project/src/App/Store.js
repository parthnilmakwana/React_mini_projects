import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "../Features/Todo/TodoSlice"

export const store = configureStore({
    reducer: todoSlice
})

export default store