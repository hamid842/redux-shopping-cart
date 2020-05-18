import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";
import { createStore } from "redux";
import { DECREASE, INCREASE } from "./actions";
import reducer from "./reducer";
import { Provider } from "react-redux";

// Initial Store
const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5,
};

// Store
const store = createStore(reducer, initialStore);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
