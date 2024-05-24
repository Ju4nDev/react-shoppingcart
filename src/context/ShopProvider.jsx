import ShopContext from "./ShopContext";

export default function ShopProvider({ children }) {
    return(
        <ShopContext.Provider>{children}</ShopContext.Provider>
    )
}