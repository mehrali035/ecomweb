import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import reducer from "../Reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products ";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    // 1st complete API Call 
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })

        try {
            const res = await axios.get(url);           // console.log(res)
            const products = await res.data;            // console.log(products)
            dispatch({ type: "SET_API_DATA", payload: products })

        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }

 
    // 2nd Single product API call
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" })

        try {
            const res = await axios.get(url);                  
             //console.log(res)
            const singleProduct = await res.data;                   
             //console.log(singleProduct)
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct })


        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    }


    useEffect(() => {

        getProducts(API)

    }, []);
    
    return (

        <AppContext.Provider value={{ ...state , getSingleProduct }}>

            {children}

        </AppContext.Provider>

    )
}


// custom hook 
const useProductContext = () => {

    return useContext(AppContext);
}


export { AppProvider, AppContext, useProductContext };