import React, { useState } from 'react'
import { SiFoodpanda } from 'react-icons/si'
import { GiHamburgerMenu, GiCookingPot } from 'react-icons/gi'
import { MdOutlineReceiptLong, MdOutlineTimer, MdOutlineDinnerDining, MdOutlineKitchen, MdDone } from 'react-icons/md'

// import { Container } from './styles';

const RecipesSingUp = () => {
  const [recipeCategory, setRecipeCategory] = useState('')

  return (
    <div>
      <header>
        <div>
          <SiFoodpanda/>
          <h1>Panda Cooking</h1>
          <GiHamburgerMenu/>
        </div>
      </header>
      <main>
        <form>
          <div>
            <MdOutlineReceiptLong/>
            <h2>ENVIAR SUA RECEITA</h2>
          </div>

          <div>
            <input type='text' placeholder='Nome da receita' />
            <input type='text' placeholder='Url da imagem' />
          </div>

          <div>
            <div>
              <p>Tempo de preparo:</p>
              <div>
                <MdOutlineTimer/>
                <input type='number' placeholder='0'/>
              </div>
              <p>minutos</p>
            </div>
            <div>
              <p>Porções:</p>
              <div>
                <MdOutlineDinnerDining/>
                <input type='number' placeholder='0' />
              </div>
            </div>
          </div>

          <div>
            <select value={recipeCategory}>
              <option value=''>Bolos</option>
              <option value=''>Carnes</option>
              <option value=''>Aves</option>
              <option value=''>Peixes</option>
              <option value=''>Sobremesas</option>
              <option value=''>Massas</option>
              <option value=''>Saladas</option>
              <option value=''>Lanches</option>
              <option value=''>Sopas</option>
              <option value=''>Bebidas</option>
            </select>
          </div>

          <div>
            <div>
              <MdOutlineKitchen/>
              <p>Ingredientes</p>
            </div>
            <input type='text' placeholder='Ex: 02 ovos' />

            <button type='button'>+ adicionar mais ingredientes</button>
          </div>

          <div>
            <div>
              <GiCookingPot/>
              <p>Modo de preparo</p>
            </div>
            <textarea placeholder='Ex: Primeiro bata os ovos com a farinha...'/>
            <button type='button'>+ adicionar proximo passo</button>
          </div>

          <button>
            <MdDone/>
            Enviar
          </button>
        </form>
      </main>
    </div>
  )
}

export default RecipesSingUp
