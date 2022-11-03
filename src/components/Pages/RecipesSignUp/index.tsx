import React, { useState } from 'react'
import { SiFoodpanda } from 'react-icons/si'
import { GiHamburgerMenu, GiCookingPot } from 'react-icons/gi'
import { MdOutlineReceiptLong, MdOutlineTimer, MdOutlineDinnerDining, MdOutlineKitchen, MdDone } from 'react-icons/md'
import { Heading2, Heading3, Heading3Span } from '../../../styles/typography'
import HeaderMenu from '../../HeaderMenu'
import { ButtonDefault, ButtonSubmit, Container, Form, FormContainer, IngredientDiv, IngredientInputDiv, InputDefault, InputSmall, Main, OptionDefault, PortionInputDiv, Portions, PrepareTime, PrepareTimeInput, PrepareTimeInputDiv, RecipeNameDiv, SelectDefault, SelectDiv, StepsDiv, TimeAndPortion, TitleDiv } from './styles'

// import { Container } from './styles';

const RecipesSingUp = () => {
  const [recipeCategory, setRecipeCategory] = useState('')

  return (
    <Container>
      <HeaderMenu/>
      <Main>
        <Form>
          <FormContainer>

            <TitleDiv>
              <Heading3><MdOutlineReceiptLong/> ENVIAR SUA RECEITA</Heading3>
            </TitleDiv>

            <RecipeNameDiv>
              <InputDefault type='text' placeholder='Nome da receita' />
              <InputDefault type='text' placeholder='Url da imagem' />
              <ButtonDefault type='button'><Heading3Span>+ adicionar mais imagens</Heading3Span></ButtonDefault>
            </RecipeNameDiv>

            <TimeAndPortion>
              <PrepareTime>
                <Heading2>Tempo de preparo:</Heading2>
                <PrepareTimeInputDiv>
                  <MdOutlineTimer size={48} color='#FF8787'/>
                  <PrepareTimeInput type='number' placeholder='0'/>
                </PrepareTimeInputDiv>
                <Heading3>minutos</Heading3>
              </PrepareTime>
              <Portions>
                <Heading2>Porções:</Heading2>
                <PortionInputDiv>
                  <MdOutlineDinnerDining size={48} color='#FF8787'/>
                  <PrepareTimeInput type='number' placeholder='0' />
                </PortionInputDiv>
              </Portions>
            </TimeAndPortion>

            <SelectDiv>
              <SelectDefault value={recipeCategory}>
                <OptionDefault value=''>Bolos</OptionDefault>
                <OptionDefault value=''>Carnes</OptionDefault>
                <OptionDefault value=''>Aves</OptionDefault>
                <OptionDefault value=''>Peixes</OptionDefault>
                <OptionDefault value=''>Sobremesas</OptionDefault>
                <OptionDefault value=''>Massas</OptionDefault>
                <OptionDefault value=''>Saladas</OptionDefault>
                <OptionDefault value=''>Lanches</OptionDefault>
                <OptionDefault value=''>Sopas</OptionDefault>
                <OptionDefault value=''>Bebidas</OptionDefault>
              </SelectDefault>
            </SelectDiv>

            <IngredientDiv>
             
                <Heading3><MdOutlineKitchen/> Ingredientes</Heading3>
           
              <IngredientInputDiv>
              <InputSmall type="text" placeholder='1 1/2'/>
              <InputDefault type='text' placeholder='xícara (chá) de ...' />
              </IngredientInputDiv>

              <ButtonDefault type='button'><Heading3Span>+ adicionar mais ingredientes</Heading3Span></ButtonDefault>
            </IngredientDiv>

            <StepsDiv>
                
                <Heading3><GiCookingPot/> Modo de preparo</Heading3>

              <InputDefault placeholder='Ex: Primeiro bata os ovos com a farinha...'/>
              <ButtonDefault type='button'><Heading3Span>+ adicionar proximo passo</Heading3Span></ButtonDefault>
            </StepsDiv>

            <ButtonSubmit>
              <Heading3Span color='white'> 
              <MdDone/>   
                Enviar
              </Heading3Span>
            </ButtonSubmit>
          </FormContainer>
        </Form>
      </Main>
    </Container>
  )
}

export default RecipesSingUp

