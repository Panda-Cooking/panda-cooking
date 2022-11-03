import React, { useEffect, useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { Container, Main } from './styles'
import { BiSend } from 'react-icons/bi'
import HeaderMenu from '../../HeaderMenu'
import api from '../../../services/api'
import { iRecipeComment, iRecipeIngredients, iRecipePreparation } from '../../../contexts/RecipesContext'

// import { Container, Header } from './styles';

interface iRecipe{
  name: string,
  images: string[] | undefined,
  time: string,
  portions: string,
  category: string,
  Ingredients: iRecipeIngredients[],
  coment: iRecipeComment[],
  preparation: iRecipePreparation[],
  userId: number,
  id: number
}

const RecipesPage = () => {

  const id = 2
  const [recipe, setRecipe] = useState<iRecipe | null>(null)
  const [ingredients, setIngredients] = useState<iRecipeIngredients[]>([])
  const [preparations, setPreparation] = useState<iRecipePreparation[]>([])
  const [comments, setComent] = useState<iRecipeComment[]>([])

  useEffect(() =>{
    const reciveEspecificRecipe = async () =>{
      try {
        const { data } : any = await api.get<iRecipe>(`/recipes?id=${id}`)
        setRecipe(data[0])
        setIngredients(data[0].Ingredients)
        setPreparation(data[0].preparation)
        setComent(data[0].comment)
      } catch (error) {
        console.log(error)
      }
    }
    reciveEspecificRecipe()
  }, [])


  return (
      <Container>
          <HeaderMenu />
          <Main>
            <section className="firstRecipeSection">
              <img src="data:image/jpeg;base64,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" alt="recipe image" />
              <h2>Melhor pizza do mundo</h2>
              <div className='recipeOwner'>
                <p>Autor:</p><BsPerson size={25}/>
              </div>
              <div className="recipeText">
                <p>
                  Lorem Ipsum is simply dummy text 
                  of the printing and typesetting indu
                  stry. Lorem Ipsum has been the ind
                  ustry's standard dummy text ever si
                  nce the 1500s, when an unknown p
                  rinter took a galley of type and scra
                  mbled it to make a type specimen 
                </p>
              </div>
            </section>
            <section className="secondRecipeSection">
              <div>
                <h2>Ingredientes</h2>
                <ul>
                  {
                    ingredients.map((ingredient, index) => <li key={index}>{`${ingredient.qtd + ' ' + ingredient.name}`}</li>)  
                  }
                </ul>
              </div>
              <div>
                <h2>Modo de preparo</h2>
                <ol>
                  { 
                    preparations.map((preparation, index) => <li key={index}>{preparation.description}</li>)  
                  }
                </ol>
              </div>
            </section>
            <section className="thirdRecipeSection">
              <h2>Comentarios</h2>
              <div className="comentsContainer">
                <div className="coment">
                  <ul>
                    {
                      comments.map((comment, index) => 
                        <li key={index}>
                          <BsPerson size={25}/>
                          <p>{comment.description}</p>
                        </li>
                      )
                    }
                  </ul>
                </div>
                <div>
                  <p>
                    novembro 2022
                  </p>
                </div>
              </div>
              <div className='addComentContainer'>
                <textarea placeholder="Adcionar comentario..."></textarea>
                <button>
                  <BiSend style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                  }}
                    size="20px"
                  />
                </button>
              </div>
            </section>
          </Main>
      </Container>
    ) 
}

export default RecipesPage
