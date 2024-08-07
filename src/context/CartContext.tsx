import { createContext, ReactNode, useContext } from "react";
import { useLocalStroage } from "../hook/useLocalStorage";
import { products } from "../data";

type CardProviderProps = {
  children: ReactNode;
};
type CartItem = {
  id: number;
  qty: number;
};
type CartContext = {
  getItemQty: (id: number) => number;
  addItem: (id: number, maximumOrderQuantity: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
  cartQty: number;
  cartItems: CartItem[];
  total: number;
};

const CartContext = createContext({} as CartContext);

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CardProvider = ({ children }: CardProviderProps) => {
  const [cartItems, setCartItems] = useLocalStroage<CartItem[]>(
    "shopping-cart",
    []
  );

  const total = cartItems.reduce((total, currentItem) => {
    const product = products.find((item) => item.id === currentItem.id);
    return total + (product?.price || 0) * currentItem.qty;
  }, 0);

  const cartQty = cartItems.reduce((qty, item) => item.qty + qty, 0);

  const getItemQty = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };
  const addItem = (id: number, addItemmaximumOrderQuantity: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, qty: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id && addItemmaximumOrderQuantity > item.qty) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseItem = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.qty == 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeItem = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  return (
    <CartContext.Provider
      value={{
        getItemQty,
        addItem,
        decreaseItem,
        removeItem,
        cartQty,
        cartItems,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
