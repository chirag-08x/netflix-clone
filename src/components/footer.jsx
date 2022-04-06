import styled from "styled-components";
import SocialIcons from "./socialIcons";
import { useState } from "react";

const Footer = () => {
  const [serviceCode, setServiceCode] = useState("service code");

  return (
    <Wrapper>
      <SocialIcons />
      <section className="footer-center">
        <section className="footer-links">
          <article>
            <a href="/#">audio and subtitles</a>
            <a href="/#">media center</a>
            <a href="/#">privacy</a>
            <a href="/#">contact us</a>
          </article>
          <article>
            <a href="/#">audio description</a>
            <a href="/#">investor relations</a>
            <a href="/#">legal notices</a>
          </article>
          <article>
            <a href="/#">help center</a>
            <a href="/#">jobs</a>
            <a href="/#">cookie preferences</a>
          </article>
          <article>
            <a href="/#">gift cards</a>
            <a href="/#">terms of use</a>
            <a href="/#">corporate information</a>
          </article>
        </section>

        <div className="service-code" onClick={() => setServiceCode("166-991")}>
          <p>{serviceCode}</p>
        </div>

        <div className="copywright">
          <p>
            &copy; 1997-{new Date().getFullYear()}, inc.{" "}
            {`{babc03c6-86d2-4afb-8305-d5087bab7dfc}`}
          </p>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  padding: 4rem 0 1rem 0;

  .footer-center {
    width: 90vw;
    max-width: 1000px;

    * {
      color: var(--clr-primary-3);
      font-size: 13px;
      text-transform: capitalize;
      font-weight: 500;
    }

    .footer-links {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 1.25rem;
      gap: 0.8rem 0;

      article {
        display: flex;
        flex-direction: column;

        a {
          line-height: 1.75;
        }
      }
    }

    .service-code {
      border: 1px solid var(--clr-primary-3);
      display: inline-block;
      padding: 0.3rem 0.4rem;
      cursor: pointer;
      margin-bottom: 1rem;
      &:hover p {
        color: white;
      }
    }

    .copywright {
      p {
        font-size: 11.5px;
      }
    }
  }

  @media (min-width: 816px) {
    .footer-center {
      .footer-links {
        grid-template-columns: repeat(4, 1fr);

        article {
          a {
            line-height: 2;
          }
        }
      }
    }
  }
`;

export default Footer;
