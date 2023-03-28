import React from "react";

import styled from "styled-components";
import useFetchGifs from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div>
      <h1>{category}</h1>
      { isLoading && (<p>Is loading</p>)}
        <Container>
          {images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))}
        </Container>

    </div>
  );
};
