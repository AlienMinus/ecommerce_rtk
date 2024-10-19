import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SuperCoin = () => {
  // Initializing the superCoins state to 0
  const [superCoins, setSuperCoins] = useState(0);

  // Getting the cart items from Redux state
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculating the total amount based on cart items
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Updating superCoins based on totalAmount
  useEffect(() => {
    if (totalAmount >= 100 && totalAmount < 200) {
      setSuperCoins(10);
    } else if (totalAmount >= 200 && totalAmount < 300) {
      setSuperCoins(20);
    } else if (totalAmount >= 300) {
      setSuperCoins(30);
    } else {
      setSuperCoins(0);
    }
  }, [totalAmount]);

  // Returning JSX with superCoins display
  return (
    <div className="super-coins" style={{ textAlign: "center" }}>
      <h2 className="super-coins-title">Super Coins</h2>
      <p className="super-coins-info">
        You will earn {superCoins} super coins with this purchase.
      </p>
    </div>
  );
};

export default SuperCoin;