import { useFetch } from "./useFetch";
import { requests } from "../helper/request";
import styled from "styled-components";
import Tiles from "./tiles";

const Romance = () => {
  const { movies, loading } = useFetch(requests.fetchRomanceMovies);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <Wrapper className="section-left">
      <h4 className="title-small">romance</h4>

      <Tiles movies={movies} />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Romance;
