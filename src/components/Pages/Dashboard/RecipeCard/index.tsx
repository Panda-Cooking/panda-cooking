import React from 'react';
import { Heading3, Text2 } from '../../../../styles/typography';
import altApi from '../../../../services/api';

interface iRecipeCardProps {
  name: string;
  category: string;
  img?: string;
}

const RecipeCard = ({ name, category, img }: iRecipeCardProps) => {
  return (
    <li>
      <img src={img} alt='Deu ruim na Api Victor' />
      <div>
        <Heading3>{name}</Heading3>
        <Text2>{category}</Text2>
      </div>
    </li>
  );
};

export default RecipeCard;
