import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/context.products";
import { product_details_url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import { Loading, Error, PageRoute } from "../components";

const ProductDetails = () => {
  return <div>ProductDetails</div>;
};

export default ProductDetails;
