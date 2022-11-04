import { Heading3, Text2 } from '../../../../styles/typography';
import { useNavigate } from 'react-router-dom';

interface iRecipeCardProps {
  name: string;
  category: string;
  images?: string[];
  recipeId: number;
}

const RecipeCard = ({ name, category, images, recipeId }: iRecipeCardProps) => {
  const navigate = useNavigate();

  const setRecipeId = (id: string) => {
    localStorage.setItem('@recipeId', id);
    navigate('/recipesPage');
  };

  return (
    <li onClick={(e) => setRecipeId(recipeId.toString())}>
      <img src={images && images[0]} alt='Imagem de receita' />
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
