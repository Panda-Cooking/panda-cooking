import { Heading3, Text2 } from '../../../../styles/typography';

interface iRecipeCardProps {
  name: string;
  category: string;
  images?: string[];
}

const RecipeCard = ({ name, category, images }: iRecipeCardProps) => {
  return (
    <li>
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
