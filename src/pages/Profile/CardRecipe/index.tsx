import { Text2 } from "../../../styles/typography";
import { NameContainer, RecipeImg, StyledFigure, StyledLi } from "./style";

interface iPropsCardRecipe {
    images: {
        id: string;
        url: string;
    }[];
    name: string;
}

const CardRecipe = (recipe: iPropsCardRecipe) => {
    return (
        <StyledLi>
            <StyledFigure>
                <RecipeImg src={recipe.images[0].url} alt={recipe.name} />
            </StyledFigure>
            <NameContainer>
                <Text2>{recipe.name}</Text2>
            </NameContainer>
        </StyledLi>
    );
};

export default CardRecipe;
