import React from "react";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";
export default function Newsletter() {
  return (
    <Section id="newsletter">
      <div className="title">
        <h1>
          <span>Subscribe</span> Newsletter
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quas
          perferendis nesciunt illum, voluptas nulla laborum alias similique
          praesentium quam.
        </p>
      </div>
      {/* <div className="container">
        <input type="text" placeholder="Search for food ..." />
        <button>Search</button>
      </div> */}
    </Section>
  );
}

const Section = styled.section`
  border: 0.00rem solid black;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  ${TitleStyles};
  
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      padding: 0.8rem;
      border-radius: 0.5rem;
      
      
    }
  }
`;
