import React, { useState } from "react";
import {  GiCookingPot } from "react-icons/gi";
import {
  MdOutlineReceiptLong,
  MdOutlineTimer,
  MdOutlineDinnerDining,
  MdOutlineKitchen,
  MdDone,
} from "react-icons/md";

import { Heading2, Heading3, Heading3Span } from "../../../styles/typography";
import {
  ButtonDefault,
  ButtonSubmit,
  Container,
  Form,
  FormContainer,
  IngredientDiv,
  IngredientInputFieldset,
  InputDefault,
  InputSmall,
  Main,
  OptionDefault,
  PortionInputDiv,
  Portions,
  PrepareTime,
  PrepareTimeInput,
  PrepareTimeInputDiv,
  RecipeNameDiv,
  SelectDefault,
  SelectDiv,
  StepsDiv,
  TimeAndPortion,
  TitleDiv,
} from "./styles";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import HeaderMenu from "../../HeaderMenu";

const RecipesSingUp = () => {
  const [inputsImages, setInputsImages] = useState([
    {
      id: 0,
    },
  ]);
  const [inputIngredient, setInputIngredient] = useState([
    {
      id: 0,
    },
  ]);
  const [inputSteps, setInputSteps] = useState([
    {
      id: 0,
    },
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addInputImage = () => {
    if (inputsImages.length < 4) {
      setInputsImages([...inputsImages, { id: inputsImages.length }]);
      return null;
    }
    toast.warn("Limite excedido");
  };
  const addInputIngredient = () => {
    setInputIngredient([...inputIngredient, { id: inputIngredient.length }]);
  };
  const addInputSteps = () => {
    setInputSteps([...inputSteps, { id: inputSteps.length }]);
  };

  const sumbitForm = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <HeaderMenu />
      <Main>
        <Form onSubmit={handleSubmit(sumbitForm)}>
          <FormContainer>
            <TitleDiv>
              <Heading3>
                <MdOutlineReceiptLong /> ENVIAR SUA RECEITA
              </Heading3>
            </TitleDiv>

            <RecipeNameDiv>
              <InputDefault
                type="text"
                placeholder="Nome da receita"
                {...register("name")}
              />
              <InputDefault
                type="text"
                placeholder="Descrição"
                {...register("description")}
              />
              {inputsImages.map((el) => {
                return (
                  <InputDefault
                    key={el.id}
                    type="text"
                    placeholder="Url da imagem"
                    {...register(`images[${el.id}]`)}
                  />
                );
              })}
              <ButtonDefault type="button" onClick={addInputImage}>
                <Heading3Span>+ adicionar mais imagens</Heading3Span>
              </ButtonDefault>
            </RecipeNameDiv>

            <TimeAndPortion>
              <PrepareTime>
                <Heading2>Tempo de preparo:</Heading2>
                <PrepareTimeInputDiv>
                  <MdOutlineTimer size={48} color="#FF8787" />
                  <PrepareTimeInput
                    type="number"
                    placeholder="0"
                    {...register("time")}
                  />
                </PrepareTimeInputDiv>
                <Heading3>minutos</Heading3>
              </PrepareTime>
              <Portions>
                <Heading2>Porções:</Heading2>
                <PortionInputDiv>
                  <MdOutlineDinnerDining size={48} color="#FF8787" />
                  <PrepareTimeInput
                    type="number"
                    placeholder="0"
                    {...register("portions")}
                  />
                </PortionInputDiv>
              </Portions>
            </TimeAndPortion>

            <SelectDiv>
              <SelectDefault {...register("category")}>
                <OptionDefault value="">Selecione uma categoria</OptionDefault>
                <OptionDefault value="Bolos">Bolos</OptionDefault>
                <OptionDefault value="Carnes">Carnes</OptionDefault>
                <OptionDefault value="Aves">Aves</OptionDefault>
                <OptionDefault value="Peixes">Peixes</OptionDefault>
                <OptionDefault value="Sobremesas">Sobremesas</OptionDefault>
                <OptionDefault value="Massas">Massas</OptionDefault>
                <OptionDefault value="Saladas">Saladas</OptionDefault>
                <OptionDefault value="Lanches">Lanches</OptionDefault>
                <OptionDefault value="Sopas">Sopas</OptionDefault>
                <OptionDefault value="Bebidas">Bebidas</OptionDefault>
              </SelectDefault>
            </SelectDiv>

            <IngredientDiv>
              <Heading3>
                <MdOutlineKitchen /> Ingredientes
              </Heading3>

              {inputIngredient.map((el) => {
                return (
                  <IngredientInputFieldset key={el.id}>
                    <InputSmall
                      type="text"
                      placeholder="1 1/2"
                      {...register(`ingredients[${el.id}].qtd`)}
                    />
                    <InputDefault
                      type="text"
                      placeholder="xícara (chá) de ..."
                      {...register(`ingredients[${el.id}].name`)}
                    />
                  </IngredientInputFieldset>
                );
              })}

              <ButtonDefault type="button" onClick={addInputIngredient}>
                <Heading3Span>+ adicionar mais ingredientes</Heading3Span>
              </ButtonDefault>
            </IngredientDiv>

            <StepsDiv>
              <Heading3>
                <GiCookingPot /> Modo de preparo
              </Heading3>

              {inputSteps.map((el) => (
                <InputDefault
                  key={el.id}
                  placeholder="Ex: Primeiro bata os ovos com a farinha..."
                  {...register(`preparation[${el.id}].description`)}
                />
              ))}
              <ButtonDefault type="button" onClick={addInputSteps}>
                <Heading3Span>+ adicionar proximo passo</Heading3Span>
              </ButtonDefault>
            </StepsDiv>

            <ButtonSubmit>
              <Heading3Span color="white">
                <MdDone />
                Enviar
              </Heading3Span>
            </ButtonSubmit>
          </FormContainer>
        </Form>
      </Main>
    </Container>
  );
};

export default RecipesSingUp;
