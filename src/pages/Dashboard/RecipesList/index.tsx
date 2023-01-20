import { useEffect, useRef } from "react";
import { useRecipeContext } from "../../../contexts/RecipesContext";
import { Heading3 } from "../../../styles/typography";
import Loader from "../../../components/Loading";
import RecipeCard from "../RecipeCard";
import { RecipesListContainer } from "./styles";
import api from "../../../services/api";

const RecipesList = () => {
    const { recipes, loadingRecipes, setRecipes, getRecipesByCategory } =
        useRecipeContext();
    const elementBeingObserved = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const intersectionObserver = new IntersectionObserver(
    //         async (entries) => {
    //             if (entries.some((entry) => entry.isIntersecting)) {
    //                 // const newRecipesPayload = recipesPayload + 1;
    //                 const { data } = await api.get(`/recipes`);

    //                 setRecipes([...recipes, ...data]);
    //                 // setRecipesPayload(newRecipesPayload);
    //             }
    //         }
    //     );

    //     if (canObserve) {
    //         intersectionObserver.observe(
    //             elementBeingObserved.current as HTMLDivElement
    //         );
    //     }

    //     return () => {
    //         intersectionObserver.disconnect();
    //     };
    // }, [canObserve, recipesPayload]);

    return (
        <RecipesListContainer>
            <div id="div1">
                <Heading3>Lista de receitas</Heading3>
            </div>
            {recipes.length === 0 ? (
                <h2>Não há receitas desta categoria</h2>
            ) : (
                <ul>
                    {recipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            recipeId={recipe.id}
                            name={recipe.name}
                            category={recipe.category.name}
                            images={recipe.imagesRecipes}
                        ></RecipeCard>
                    ))}
                </ul>
            )}
            {loadingRecipes && <Loader></Loader>}

            <div ref={elementBeingObserved} id="infinityScroll"></div>
        </RecipesListContainer>
    );
};

export default RecipesList;
