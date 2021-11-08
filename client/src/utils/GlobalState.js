// createContext() is a function that serves as a container for the global state
import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

// instantiate a new Context object and name it StoreContext
const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
    });
    // use this to confirm that it works!
    console.log(state);

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };