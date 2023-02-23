import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./Context/product_context";
import { FilterContextProvider } from "./Context/Filter_Context";
import {CartProvider} from "./Context/cart_context"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <AppProvider>
        <FilterContextProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </FilterContextProvider>
    </AppProvider>
);
reportWebVitals();
