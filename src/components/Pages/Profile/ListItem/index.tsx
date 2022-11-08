import { iRecipe } from "../../../../contexts/RecipesContext";
import { Text2 } from "../../../../styles/typography";
import { NameContainer, RecipeImg, StyledFigure, StyledLi } from "./style";

interface iPropsLisyItem {
  images: {
    value: string;
  }[];
  name: string;
}

const ListItem = (recipe: iPropsLisyItem) => {
  return (
    <StyledLi>
      <StyledFigure>
        <RecipeImg src={recipe.images[0].value} alt={recipe.name} />
      </StyledFigure>
      <NameContainer>
        <Text2>{recipe.name}</Text2>
      </NameContainer>
    </StyledLi>
  );
};

export default ListItem;
