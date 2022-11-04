import React, { useEffect } from 'react';
import { SiFoodpanda } from 'react-icons/si';
import { BsUpload } from 'react-icons/bs';
import { Heading2, Heading3, Text2 } from '../../../styles/typography';

import { Container } from './styles';
import RecipesList from './RecipesList';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../../contexts/AuthContext';
import MenuHamburguer from './MenuHamburguer';
import { useRecipeContext } from '../../../contexts/RecipesContext';
import panda from '../../../../public/img/panda 4.png';
import HeaderMenu from '../../HeaderMenu';

const Dashboard = () => {
  const { user, logoutFunction } = useUserContext();
  const { getFilteredRecipes, setSearchParam } = useRecipeContext();

  return (
    <Container>
      <header>
        <div>
          <SiFoodpanda size={45} className='mainPandaLogo'></SiFoodpanda>
          <Heading2>Panda Cooking</Heading2>
        </div>
        {user ? (
          <MenuHamburguer logoutFunction={logoutFunction}></MenuHamburguer>
        ) : (
          <Link to='/signIn' id='goToLogin'>
            Login
          </Link>
        )}
      </header>
      <main>
        <section className='filterSection'>
          <div id='fs1'>
            <SiFoodpanda size={30} id='miniLogo'></SiFoodpanda>
            <div id='fs4'>
              <img src={panda} alt='' />
              <div id='fs2'>
                <Link to='/recipesSignUp'>
                  <BsUpload size={22}></BsUpload>
                  <Text2>Enviar</Text2>
                </Link>
              </div>
              <div className='searchBar' id='fs3'>
                <input
                  onChange={(e) => setSearchParam(e.target.value)}
                  type='text'
                  placeholder='Pesquisar...'
                />
              </div>
            </div>
          </div>
          <ul
            onClick={(e) =>
              getFilteredRecipes((e.target as HTMLTextAreaElement).innerText)
            }
          >
            <li className='filterAll'>Todos</li>
            <li>Bolos</li>
            <li>Carnes</li>
            <li>Aves</li>
            <li>Peixes</li>
            <li>Sobremesa</li>
            <li>Massas</li>
            <li>Saladas</li>
            <li>Lanches</li>
            <li>Sopas</li>
            <li>Bebidas</li>
          </ul>
        </section>
        <RecipesList></RecipesList>
      </main>
    </Container>
  );
};

export default Dashboard;

//
