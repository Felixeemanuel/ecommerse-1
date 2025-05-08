import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext(undefined)

export function useProductsFunction() {
    const context = useContext(ProductsContext)

    if(context === undefined) {
        throw new Error("useProductsContext must be used with a ProductsContext")
    }

    return context
}

export function ProductsProvider({children}) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => {
            if(!response.ok) {
                throw new Error("Failed to fetch products")
            }
            return response.json()
        })
        .then((data) => {
            setProducts(data)
            setLoading(false)
        })
        .catch((error) => {
            setError(error)
            setLoading(false)
        })
    }, [])

    return (
        <ProductsContext.Provider value={{ products, loading, error }}>
            {children}
        </ProductsContext.Provider>
    )
}

