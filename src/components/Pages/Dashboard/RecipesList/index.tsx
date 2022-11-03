import React from 'react';
import { useRecipeContext } from '../../../../contexts/RecipesContext';
import { Heading3, Text2 } from '../../../../styles/typography';
import RecipeCard from '../RecipeCard';
import { RecipesListContainer } from './styles';

const RecipesList = () => {
  const { recipes } = useRecipeContext();

  return (
    <RecipesListContainer>
      <div id='div1'>
        <Heading3>Lista de receitas</Heading3>
      </div>
      {/*.map das receitas*/}
      <ul>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            name={recipe.name}
            category={recipe.category}
          ></RecipeCard>
        ))}
      </ul>
    </RecipesListContainer>
  );
};

export default RecipesList;
