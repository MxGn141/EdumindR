import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Course } from '../data/courses';

interface CartItem {
  course: Course;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Course }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { courseId: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'CLOSE_CART' };

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.course.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.course.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { course: action.payload, quantity: 1 }],
        };
      }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.course.id !== action.payload),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.course.id === action.payload.courseId
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        ).filter(item => item.quantity > 0),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };

    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case 'CLOSE_CART':
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addItem: (course: Course) => void;
  removeItem: (courseId: number) => void;
  updateQuantity: (courseId: number, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  closeCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (course: Course) => {
    dispatch({ type: 'ADD_ITEM', payload: course });
  };

  const removeItem = (courseId: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: courseId });
  };

  const updateQuantity = (courseId: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { courseId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => {
      const price = parseFloat(item.course.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const value: CartContextType = {
    state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    closeCart,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}; 