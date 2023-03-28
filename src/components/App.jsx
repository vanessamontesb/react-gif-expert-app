import { useState } from "react";
import styled from "styled-components";
import { AddCategory, GifGrid } from "../components";


const Wrapper = styled.section`
  padding: 4em;
`;

const App = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <Wrapper>
      <h1>Gif lovers</h1>
      <AddCategory onNewCategory={onAddCategory} />
        {categories.map((category) => 
          (
            <GifGrid key = {category} category = {category}/>
          )
  )}
    </Wrapper>
  );
};

export default App;
