import styled from "styled-components";
import { PageRoute } from "../components/";

import aboutImg from "./../assets/hero-bg.jpeg";

const About = () => {
  return (
    <main>
      <PageRoute title="About"></PageRoute>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="about" />
        <article>
          <div className="title">
            <h2>Our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A optio culpa fuga labore sapiente perspiciatis
            corporis, tempore harum, ex, dolores debitis necessitatibus suscipit ab. Blanditiis reiciendis quisquam
            cumque illum ratione illo, quibusdam aliquam nesciunt tenetur nam quidem sint consequatur explicabo vel iure
            officia. Eligendi at voluptate delectus ipsam culpa sunt sequi ex harum quidem reiciendis illo consectetur
            quia tenetur, nostrum enim voluptatibus labore quaerat fuga natus cumque repellendus. Nihil, dignissimos.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 400px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default About;
