import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useCartContext } from "../context";
import { PageRoute, CartContent } from "../components";

const Cart = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <main>
        <PageRoute title="cart" />
        <Wrapper className="page-100">
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        </Wrapper>
      </main>
    );
  }
  return (
    <main>
      <PageRoute title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default Cart;
