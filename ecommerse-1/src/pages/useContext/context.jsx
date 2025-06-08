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
        const fetchProducts = async () => {
            try {
                setLoading(true);
    
                const categories = ['laptops', 'fragrances', 'home-decoration', 'skin-care'];
                const allProducts = [];
    
                for (const category of categories) {
                    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch ${category}`);
                    }
                    const data = await response.json();
                    allProducts.push(...data.products);
                }
    
                setProducts(allProducts);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);


    return (
        <ProductsContext.Provider value={{ products, loading, error }}>
            {children}
        </ProductsContext.Provider>
    )
}

