import { Heading3, Text2 } from "../../../styles/typography";
import { useNavigate } from "react-router-dom";

interface iRecipeCardProps {
    name: string;
    category: string;
    images: {
        id: string;
        url: string;
    }[];
    recipeId: string;
}

const RecipeCard = ({ name, category, images, recipeId }: iRecipeCardProps) => {
    const navigate = useNavigate();

    const navigateToRecipe = (id: string) => {
        navigate(`/recipesPage/${id}`);
    };

    return (
        <li onClick={(e) => navigateToRecipe(recipeId)}>
            <img src={images && images[0].url} alt="Imagem de receita" />
            <div>
                <Heading3>{name}</Heading3>
                <div>
                    <Text2>{category}</Text2>
                </div>
            </div>
        </li>
    );
};

export default RecipeCard;
