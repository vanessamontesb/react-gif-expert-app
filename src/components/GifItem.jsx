import React from 'react';

import styled from 'styled-components';

const Card = styled.section`
  align-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  height: 0%;  
  justify-content: center;
  margin-bottom: 20px;
  margin-right: 20px;
  overflow: hidden;

  p {
  background-color: white;
  flex: 1;
  font-size: 1.5rem;
  margin-top: 5px;
  padding: 5px 20px 0px 20px;
  text-align: center;
}

img {
  width: 100%;
}
`;



export const GifItem = ({ title, url}) => {
  return (
    <Card>
      <img src={url} alt={title} />
      <p>{title}</p>
    </Card>
  )
}

