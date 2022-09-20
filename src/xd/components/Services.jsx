import React from "react";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";
import background from '../img/hero2.jpg'

// const background = "https://thumbs.dreamstime.com/b/organic-vegetables-fruits-fresh-variety-isolated-white-background-88383730.jpg"
export default function Services() {
  return (
    <Section id="services">
      <div className="title">
        <h1 className="yellow">What we do?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
          incidunt magnam labore ipsam vero minima maxime doloribus dolores ipsa
          soluta.
        </p>
      </div>

      <div className="services">
       
        <img src={background} alt="" />
        
      
      </div>





    </Section>
  );
}

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    margin-top: 2rem;
    &:hover {
     
        img {
          transform: scale(1.2);
          margin-bottom : 5rem

        }
      
    }
     img {
        object-fit: cover;
        width: 100%;
        height: 25rem;
        border-radius: 4vh;
        transition: 0.8s ease-in-out;

        
      }
    }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      
    }
    
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
