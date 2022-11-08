import React, { useEffect } from 'react'
import { SiFoodpanda } from 'react-icons/si'
import { BsUpload } from 'react-icons/bs'
import { Text2 } from '../../../styles/typography'

import { Container } from './styles'
import RecipesList from './RecipesList'
import { Link } from 'react-router-dom'
import { useRecipeContext } from '../../../contexts/RecipesContext'
import panda from '../../../../src/assets/img/panda 4.png'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper'

const Dashboard = () => {
  const categories = [
    'Todos',
    'Bolos',
    'Carnes',
    'Aves',
    'Peixes',
    'Sobremesa',
    'Massas',
    'Saladas',
    'Lanches',
    'Sopas',
    'Bebidas',
  ]

  const { getFilteredRecipes, setSearchParam } = useRecipeContext()

  return (
    <Container>
      <main>
        <section className="filterSection">
          <div id="fs1">
            <Link to="/">
              <SiFoodpanda size={30} id="miniLogo"></SiFoodpanda>
            </Link>
            <div id="fs4">
              <img src={panda} alt="" />
              <div id="fs2">
                <Link to="/recipesSignUp">
                  <BsUpload size={22}></BsUpload>
                  <Text2>Enviar</Text2>
                </Link>
              </div>
              <div className="searchBar" id="fs3">
                <input
                  onChange={e => setSearchParam(e.target.value)}
                  type="text"
                  placeholder="Pesquisar..."
                />
              </div>
            </div>
          </div>

          <div>
            <Swiper
              mousewheel={true}
              grabCursor={true}
              slidesPerView={3}
              spaceBetween={20}
              breakpoints={{
                600: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 7,
                  spaceBetween: 20,
                },
              }}
              modules={[Mousewheel]}
            >
              {categories.map((category, index) => (
                <SwiperSlide
                  className={index < 1 ? 'filterAll' : ''}
                  key={category}
                  onClick={e =>
                    getFilteredRecipes(
                      (e.target as HTMLTextAreaElement).innerText
                    )
                  }
                >
                  {category}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <RecipesList></RecipesList>
      </main>
    </Container>
  )
}

export default Dashboard
