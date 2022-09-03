import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { PageRoute, StripeCheckout } from "./../components/";
import { useCartContext } from "../context";

const Checkout = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <PageRoute title="checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
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

export default Checkout;
