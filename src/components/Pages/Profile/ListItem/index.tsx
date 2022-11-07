import { Text2 } from "../../../../styles/typography"
import { NameContainer, RecipeImg, StyledFigure, StyledLi } from "./style"

interface iRecipe{
    images: Array<string>
    name: string
}

const ListItem = (recipe: iRecipe) =>{
    return(
        <StyledLi>
        <StyledFigure>
            <RecipeImg src={recipe.images[0]} alt='' />
        </StyledFigure>
        <NameContainer>
            <Text2>{recipe.name}</Text2>
        </NameContainer>
    </StyledLi>
    )
}

export default ListItem