import { getRandom } from "../helper/random";
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import styled from "styled-components";
import { requests } from "../helper/request";
import { FaPlay } from "react-icons/fa";

const { movieRandomIndex } = getRandom();

const ImageURL = `https://image.tmdb.org/t/p/original`;

const Featured = () => {
  const { movies, loading } = useFetch(requests.fetchNetflixOriginals);
  const [state, setState] = useState({});

  useEffect(() => {
    console.log(movies[movieRandomIndex]);
    if (!loading) {
      const { original_name, overview, backdrop_path } =
        movies[movieRandomIndex];
      const image = `${ImageURL}${backdrop_path}`;
      setState({ original_name, overview, img: image });
    }
    // eslint-disable-next-line
  }, [loading]);

  if (loading) {
    return <LoadingWrapper></LoadingWrapper>;
  }

  const { original_name, overview, img } = state;

  return (
    <Wrapper>
      <Header className="header" img={img}></Header>

      <div className="info">
        <h1 className="title">{original_name}</h1>
        <div className="btn-container">
          <button className="btn">
            <FaPlay /> play
          </button>
          <button className="btn">my list</button>
        </div>
        <p className="overview">{overview}</p>
      </div>
    </Wrapper>
  );
};

const LoadingWrapper = styled.div`
  height: 30rem;

  @media (min-width: 768px) {
    height: calc(100vh - 4.5rem);
  }
`;

const Header = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center center;
  height: 30rem;

  @media (min-width: 768px) {
    height: calc(100vh - 4.5rem);
  }
`;

const Wrapper = styled.section`
  position: relative;

  .info {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 3rem;
    font-family: var(--font-primary-1);

    .title {
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .overview {
      max-width: 32rem;
      font-weight: 600;
      font-size: 1rem;
    }

    .btn-container {
      display: flex;
      gap: 0 1rem;
      margin-bottom: 1rem;
      .btn {
        border: none;
        background-color: rgba(0, 0, 0, 0.5);
        font-weight: var(--font-primary-1);
        text-transform: capitalize;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 0.3rem;
        letter-spacing: 1px;
        display: flex;
        justify-content: center;
        gap: 0 0.5rem;
        align-items: center;
      }
    }

    * {
      color: white;
    }
  }

  @media (min-width: 768px) {
    .info {
      .title {
        font-size: 3.5rem;
      }

      .overview {
        font-size: 1.25rem;
      }
    }
  }

  @media (min-width: 992px) {
    .info {
      .title {
        font-size: 4.5rem;
      }
    }
  }
`;

export default Featured;
