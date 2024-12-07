"use client"; // Mark this file as a Client Component

import { Provider } from "react-redux";
import { store } from "./store/store";

export default function ReduxProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}