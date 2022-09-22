import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/context.products";
import { product_details_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import { Loading, Error, PageRoute, Stars, ProductImage, AddToCart } from "../components";

const ProductDetails = () => {
  const { id } = useParams();
  const history = useNavigate();

  const {
    product_details_loading: loading,
    product_details_error: error,
    product_details: product,
    fetchProductDetails,
  } = useProductsContext();

  useEffect(() => {
    fetchProductDetails(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const { name, price, description, stock, stars, reviews, id: sku, company, images } = product;
  console.log(images);
  return (
    <Wrapper>
      <PageRoute title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImage images={images} />
          <section className="content">
            <h2>{name}</h2>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default ProductDetails;
