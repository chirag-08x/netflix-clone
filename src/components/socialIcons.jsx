import styled from "styled-components";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <Wrapper>
      <a
        href="https://www.facebook.com/NetflixIN/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/Netflix_IN/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com/netflixindia"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg"
        target="_blank"
        rel="noreferrer"
      >
        <FaYoutube />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  gap: 0 1rem;
  margin-bottom: 0.5rem;
  a {
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
  }
`;

export default SocialIcons;
