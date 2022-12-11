import React, { useState } from 'react';

function Cart() {
  // Use the useState hook to manage the state of the cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  function addToCart(item) {
    // Add the new item to the cart items
    setCartItems([...cartItems, item]);

    // Save the updated cart items to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  // Function to remove an item from the cart
  function removeFromCart(item) {
    // Remove the item from the cart items
    setCartItems(cartItems.filter(i => i !== item));

    // Save the updated cart items to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  return (
    <div>
      {/* Display the cart items */}
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Add an item to the cart */}
      <button onClick={() => addToCart({ id: 1, name: 'Item 1', price: 5.99 })}>
        Add to cart
      </button>
    </div>
  );
}

export default Cart;