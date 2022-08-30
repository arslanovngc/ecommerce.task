import styled from "styled-components";
import { Link } from "react-router-dom";

const PageRoute = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h4>
          <Link to="/">Home /</Link>
          {product && <Link to="products"> Products /</Link>} {title}
        </h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
  h4 {
    margin: 0;
    line-height: 1.5;
  }
  a {
    color: var(--clr-primary-3);
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageRoute;
