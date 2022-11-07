import React, { useContext, useEffect, useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { Container, Main } from './styles';
import { BiSend } from 'react-icons/bi';
import HeaderMenu from '../../HeaderMenu';
import api from '../../../services/api';
import {
  iRecipeComment,
  iRecipeIngredients,
  iRecipePreparation,
} from '../../../contexts/RecipesContext';
import { userContext } from '../../../contexts/AuthContext';
import { useParams } from 'react-router-dom';

// import { Container, Header } from './styles';

interface iRecipe {
  name: string;
  images: string[] | undefined;
  time: string;
  portions: string;
  category: string;
  Ingredients: iRecipeIngredients[];
  coment: iRecipeComment[];
  preparation: iRecipePreparation[];
  userId: number;
  id: number;
}

const RecipesPage = () => {
  const { user } = useContext(userContext);
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState<iRecipe | null>(null);
  const [ingredients, setIngredients] = useState<iRecipeIngredients[]>([]);
  const [preparations, setPreparation] = useState<iRecipePreparation[]>([]);
  const [comments, setComment] = useState<iRecipeComment[]>([]);
  const [newComment, setNewComment] = useState<any>({});

  const saveComment = (comment: string) => {
    const objComment = {
      description: comment,
      userId: 1,
    };
    setNewComment(objComment);
    console.log(objComment);
  };

  useEffect(() => {
    const reciveEspecificRecipe = async () => {
      try {
        const { data }: any = await api.get<iRecipe>(`/recipes?id=${recipeId}`);
        setRecipe(data[0]);
        setIngredients(data[0].ingredients);
        setPreparation(data[0].preparations);
        setComment(data[0].comments);
      } catch (error) {
        console.log(error);
      }
    };
    reciveEspecificRecipe();
  }, []);

  const addComent = async (newComent: any) => {
    const token = localStorage.getItem('@pandaToken');
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.patch(`/recipes?id=${recipeId}`, [
        ...comments,
        newComent,
      ]);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <HeaderMenu />
      <Main>
        <section className='firstRecipeSection'>
          <div className='slide'>
            <div>
              {recipe?.images?.map((image, index) => (
                <div key={index}>
                  <img src={image} alt='Imagem da receita' />
                </div>
              ))}
            </div>
          </div>
          <h2>{recipe?.name}</h2>
          <div className='recipeOwner'>
            {user ? (
              <p>Autor: {user?.img}</p>
            ) : (
              <>
                <p>Autor: </p> <BsPerson size={25} />
              </>
            )}
          </div>
          <div className='recipeText'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              indu stry. Lorem Ipsum has been the ind ustry's standard dummy
              text ever si nce the 1500s, when an unknown p rinter took a galley
              of type and scra mbled it to make a type specimen
            </p>
          </div>
        </section>
        <section className='secondRecipeSection'>
          <div>
            <h2>Ingredientes</h2>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{`${
                  ingredient.qtd + ' ' + ingredient.name
                }`}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Modo de preparo</h2>
            <ol>
              {preparations.map((preparation, index) => (
                <li key={index}>{preparation.description}</li>
              ))}
            </ol>
          </div>
        </section>
        <section className='thirdRecipeSection'>
          <h2>Comentarios</h2>
          <div className='comentsContainer'>
            <div className='coment'>
              <ul>
                {comments.map((comment, index) => (
                  <li key={index}>
                    <BsPerson size={25} />
                    <p>{comment.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p>novembro 2022</p>
            </div>
          </div>
          <div className='addComentContainer'>
            <textarea
              placeholder='Adcionar comentario...'
              onChange={(e) => saveComment(e.target.value)}
            ></textarea>
            <button onClick={() => addComent(newComment)}>
              <BiSend
                style={{
                  position: 'absolute',
                  top: '0px',
                  right: '0px',
                }}
                size='20px'
              />
            </button>
          </div>
        </section>
      </Main>
    </Container>
  );
};

export default RecipesPage;
