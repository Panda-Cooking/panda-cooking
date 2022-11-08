import { useEffect, useRef, useState } from 'react';
import { useRecipeContext } from '../../../../contexts/RecipesContext';
import api from '../../../../services/api';
import { Heading3, Text2 } from '../../../../styles/typography';
import Loader from '../../../Loading';
import RecipeCard from '../RecipeCard';
import { RecipesListContainer } from './styles';

const RecipesList = () => {
  const {
    recipes,
    filteredRecipes,
    setRecipes,
    canObserve,
    recipesPayload,
    setRecipesPayload,
  } = useRecipeContext();

  const elementBeingObserved = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(async (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        const newRecipesPayload = recipesPayload + 1;
        const request = await api.get(
          `/recipes?_sort=id&_order=desc&_page=${newRecipesPayload}&_limit=12`
        );
        setRecipes([...recipes, ...request.data]);
        setRecipesPayload(newRecipesPayload);
      }
    });

    if (canObserve) {
      intersectionObserver.observe(
        elementBeingObserved.current as HTMLDivElement
      );
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, [canObserve, recipesPayload]);

  return (
    <RecipesListContainer>
      <div id='div1'>
        <Heading3>Lista de receitas</Heading3>
      </div>
      {recipes.length || filteredRecipes.length ? (
        <ul>
          {filteredRecipes.length
            ? filteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipeId={recipe.id}
                  name={recipe.name}
                  category={recipe.category}
                  images={recipe.images}
                ></RecipeCard>
              ))
            : recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipeId={recipe.id}
                  name={recipe.name}
                  category={recipe.category}
                  images={recipe.images}
                ></RecipeCard>
              ))}
        </ul>
      ) : (
        <Loader></Loader>
      )}

      {canObserve && <div ref={elementBeingObserved} id='infinityScroll'></div>}
    </RecipesListContainer>
  );
};

export default RecipesList;
