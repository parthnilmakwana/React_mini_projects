import { useContext, createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export function CartProvider({children}){
    const [cartItems, setCartItems] = useState(() => {
        const savedCard = localStorage.getItem("cartItems")
        return savedCard ? JSON.parse(savedCard) : []
    })

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    function addToCart(product){
        setCartItems(prevItems => {
            const isAlreadycart = prevItems.find(item => item.id === product.id)
            if (isAlreadycart){
                return prevItems.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
            }
            else{
                return [...prevItems, {...product, quantity: 1}]
            }
        })
    }

    function removeItem(productId){
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
    }
     
    function updateQuantity(productId, newQuantity){
        if(newQuantity <= 0){
            removeItem(productId)
            return;
        }
        else{
            setCartItems(prevItems =>
                prevItems.map(item => 
                    item.id === productId 
                    ? {...item, quantity: newQuantity} 
                    : item
                )
            )   
        }
    }

    function clearCart(){
        setCartItems([])
    }

    function getCardCount(){
        return cartItems.reduce((total,item)=>total + item.quantity,0)
    }

    function getTotalAmount(){
        return cartItems.reduce((total,item)=>total + item.price * item.quantity,0)
    }

    return(
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeItem,
            updateQuantity,
            clearCart,
            getCardCount,
            getTotalAmount
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () =>{
    return  useContext(CartContext)
} 
