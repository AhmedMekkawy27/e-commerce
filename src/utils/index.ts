import { createStandaloneToast } from "@chakra-ui/react";
import { cartProduct, wishlistProduct } from "../interfaces";

export const addItemToShoppingCart = (cartItem: cartProduct, shoppingCartItems: cartProduct[]) =>{
    const {toast} = createStandaloneToast();
    const exists = shoppingCartItems.find((item) => item.id === cartItem.id);
    if (exists) {
        toast({
            title: "Product exists.",
            description: "Product is already in cart, so quantity will be increased",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        return shoppingCartItems.map((item) =>
            item.id === cartItem.id? {...item, quantity: item.quantity + 1, total: item.price * (item.quantity + 1) } : item
        );
    }else{
        toast({
            title: "Product added to cart.",
            description: "Product has been added to your cart",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        return [...shoppingCartItems, {...cartItem, quantity: 1, total: cartItem.price}];
    }
}

export const modifyItemQuantity = (cartItem: {value: number; item: cartProduct}, shoppingCartItems: cartProduct[])=>{
    return shoppingCartItems.map(item => {
        if(item.id === cartItem.item.id){
            return {...item, quantity: cartItem.value, total: cartItem.value * item.price}
        }
        return item;
    })
}

export const addItemToWishlist = (wishlistItem: wishlistProduct, wishlistItems: wishlistProduct[]) =>{
    const {toast} = createStandaloneToast();
    const exists = wishlistItems.find((item) => item.id === wishlistItem.id);
    if (exists) {
        toast({
            title: "Product exists.",
            description: "Product is removed from wishlist",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        return wishlistItems.filter((item) =>
            item.id !== wishlistItem.id
        );
    }else{
        toast({
            title: "Product added to wishlist.",
            description: "Product has been added to your wishlist",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        return [...wishlistItems, wishlistItem];
    }
}