import { useFetch } from "./useFetch";
import { requests } from "../helper/request";
import styled from "styled-components";
import Tiles from "./tiles";

const Comedy = () => {
  const { movies, loading } = useFetch(requests.fetchComedyMovies);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <Wrapper className="section-left">
      <h4 className="title-small">comedy </h4>

      <Tiles movies={movies} />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Comedy;
