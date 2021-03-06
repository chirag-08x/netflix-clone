import { useState, useRef } from "react";
import styled from "styled-components";
import {
  FaAngleLeft,
  FaAngleRight,
  FaPlay,
  FaHeart,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";

const ImageURL = `https://image.tmdb.org/t/p/original`;

const Tiles = ({ movies }) => {
  const [data, setData] = useState([...movies]);
  const refContainer = useRef(null);
  const refContainer2 = useRef(null);
  const sliderContainer = useRef(null);
  let sliderCountRight = 0;
  let sliderCountLeft = 0;

  const displaybuttons = () => {
    refContainer.current.classList.add("show-btns");
    refContainer2.current.classList.add("show-btns");
  };

  const hidebuttons = () => {
    refContainer.current.classList.remove("show-btns");
    refContainer2.current.classList.remove("show-btns");
  };

  const slideLeft = () => {
    if (sliderCountLeft === 0) return;
    sliderCountLeft += 1;
    sliderCountRight -= 1;
    sliderContainer.current.style = `transform : translateX(${
      sliderCountLeft * 20
    }rem)`;
  };

  const slideRight = () => {
    if (sliderCountRight === 6) return;
    sliderCountLeft -= 1;
    sliderCountRight += 1;
    sliderContainer.current.style = `transform : translateX(${
      sliderCountRight * -20
    }rem)`;
  };

  return (
    <Wrapper onMouseOver={displaybuttons} onMouseLeave={hidebuttons}>
      <button className="left slide" ref={refContainer} onClick={slideLeft}>
        <FaAngleLeft />
      </button>

      <button className="right slide" ref={refContainer2} onClick={slideRight}>
        <FaAngleRight />
      </button>

      <div className="tile-parent">
        <div ref={sliderContainer}>
          {data.map((item) => {
            const { poster_path, id } = item;
            return (
              <div to={"/movie"} key={id} className="tiles-container">
                <img src={`${ImageURL}${poster_path}`} alt="" />
                <button className="play-btn">
                  <FaPlay />
                </button>

                <article className="btns">
                  <button>
                    <FaHeart />
                  </button>
                  <button>
                    <FaThumbsUp />
                  </button>
                  <button>
                    <FaThumbsDown />
                  </button>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;

  .tile-parent {
    overflow: hidden;
    div {
      display: flex;
      gap: 0 0.5rem;
      transition: all 0.5s linear;

      .tiles-container {
        flex-shrink: 0;
        cursor: pointer;
        position: relative;

        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.5);
          padding: 1rem 0.8rem 1rem 1rem;
          border-radius: 50%;
          color: white;
          font-size: 1rem;
          border: none;
          place-items: center;
          display: none;
          @media (min-width: 768px) {
            font-size: 2rem;
          }
        }

        &:hover .play-btn {
          display: grid;
        }

        &:hover .btns {
          display: flex;
        }

        .btns {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          justify-content: space-between;
          width: 80%;
          display: none;
          button {
            background: #0a0a0a;
            color: #e1e1e1;
            font-size: 0.875rem;
            border: 1px solid black;
            padding: 0.5rem;
            border-radius: 50%;
            display: grid;
            place-items: center;

            @media (min-width: 768px) {
              font-size: 1.085rem;
            }
          }
        }

        img {
          width: 7rem;
        }
      }
    }
  }

  .slide {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: transparent;
    font-size: 1.5rem;
    color: #e6e6e6;
    display: none;
    z-index: 5;
    margin: 0 0.5rem;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  .show-btns {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    display: grid;
    place-items: center;
  }

  .right {
    right: 0;
  }

  @media (min-width: 768px) {
    .tile-parent {
      div {
        width: 10rem;
        .tiles-container {
          width: 100%;
          flex-shrink: 0;

          img {
            width: 100%;
            height: 100%;
            transition: all 0.5s linear;
          }
        }
      }
    }
  }
`;

export default Tiles;
