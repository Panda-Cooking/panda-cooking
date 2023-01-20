import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

import { useRecipeContext } from "../../../contexts/RecipesContext";
import { Heading3 } from "../../../styles/typography";
import { HorizontalScroll } from "../../../components/HorizontalScroll";
import { SectionLastAddedStyled } from "./style";

export const SectionLastAdded = () => {
    const { recipes } = useRecipeContext();

    return (
        <SectionLastAddedStyled>
            <div className="container">
                <Heading3>Últimos adicionados</Heading3>

                <HorizontalScroll>
                    {recipes.map((recipe) => (
                        <SwiperSlide key={recipe.id}>
                            <Link to={`/recipesPage/${recipe.id}`}>
                                <img
                                    src={recipe.imagesRecipes[0].url}
                                    alt={recipe.name}
                                />
                                <Heading3>{recipe.name}</Heading3>
                            </Link>
                        </SwiperSlide>
                    ))}
                </HorizontalScroll>
            </div>
        </SectionLastAddedStyled>
    );
};
