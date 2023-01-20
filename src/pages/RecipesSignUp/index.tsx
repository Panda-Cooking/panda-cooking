import React from "react";
import { GiCookingPot } from "react-icons/gi";
import {
    MdOutlineReceiptLong,
    MdOutlineTimer,
    MdOutlineDinnerDining,
    MdOutlineKitchen,
    MdDone,
} from "react-icons/md";
import { TiDelete } from "react-icons/ti";

import { Heading2, Heading3, Heading3Span } from "../../styles/typography";
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

import { useForm, useFieldArray } from "react-hook-form";
import { useAuthContext } from "../../contexts/AuthContext";
import { iRecipe } from "../../contexts/RecipesContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../services/api";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";

interface iRecipeRequest {
    name: string;
    description: string;
    category: string;
    time: string;
    portions: number;
    imagesRecipes: {
        url: string;
    }[];
    ingredients: {
        amount: string;
        name: string;
    }[];
    preparations: {
        description: string;
    }[];
}

const RecipesSingUp = () => {
    const { user } = useAuthContext();

    const formSchema: yup.SchemaOf<iRecipeRequest> = yup.object().shape({
        name: yup.string().required(),
        description: yup.string().required(),
        imagesRecipes: yup
            .array()
            .of(
                yup.object({
                    url: yup.string().required(),
                })
            )
            .max(4)
            .required(),
        time: yup.string().required(),
        portions: yup.number().required(),
        category: yup.string().required(),
        ingredients: yup.array().of(
            yup.object({
                name: yup.string().required(),
                amount: yup.string().required(),
            })
        ),
        preparations: yup.array().of(
            yup.object({
                description: yup.string().required(),
            })
        ),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<iRecipeRequest>({
        defaultValues: {
            imagesRecipes: [{ url: "" }],
            ingredients: [{ amount: "", name: "" }],
            preparations: [{ description: "" }],
        },
        mode: "onBlur",
        resolver: yupResolver(formSchema),
    });

    const {
        fields: inputsImages,
        append: appendInputImage,
        remove: removeInputImage,
    } = useFieldArray({
        control,
        name: "imagesRecipes",
    });
    const addInputImage = () => {
        if (inputsImages.length < 4) {
            appendInputImage({ url: "" });
            return null;
        }
        toast.warn("Limite excedido!");
    };

    const {
        fields: inputIngredient,
        append: appendInputIngredient,
        remove: removeInputIngredient,
    } = useFieldArray({
        control,
        name: "ingredients",
    });
    const {
        fields: inputSteps,
        append: appendInputSteps,
        remove: removeInputSteps,
    } = useFieldArray({
        control,
        name: "preparations",
    });

    const sumbitForm = (data: iRecipeRequest) => {
        try {
            api.post("recipes", data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem(
                        "@pandaToken"
                    )}`,
                },
            });

            toast.success("Receita criada com sucesso!");

            reset();
        } catch (error) {
            toast.error("Ops! Algo deu errado! :/");
            toast.error("Tente novamente!");
        }
    };

    return (
        <>
            {!user ? (
                <Navigate to="/signIn" replace={true} />
            ) : (
                <motion.div
                    animate={{ opacity: [0, 1] }}
                    exit={{ opacity: [1, 0] }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <Container>
                        <Main>
                            <Form onSubmit={handleSubmit(sumbitForm)}>
                                <FormContainer>
                                    <TitleDiv>
                                        <Heading3>
                                            <MdOutlineReceiptLong /> ENVIAR SUA
                                            RECEITA
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
                                        {inputsImages.map((field, index) => (
                                            <div key={field.id}>
                                                <InputDefault
                                                    type="text"
                                                    placeholder="Url da imagem"
                                                    {...register(
                                                        `imagesRecipes.${index}.url` as const
                                                    )}
                                                />
                                                {index > 0 && (
                                                    <button
                                                        onClick={() =>
                                                            removeInputImage(
                                                                index
                                                            )
                                                        }
                                                    >
                                                        <TiDelete size={24} />
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                        <ButtonDefault
                                            type="button"
                                            onClick={() => addInputImage()}
                                        >
                                            <Heading3Span>
                                                + adicionar mais imagens
                                            </Heading3Span>
                                        </ButtonDefault>
                                    </RecipeNameDiv>

                                    <TimeAndPortion>
                                        <PrepareTime>
                                            <Heading2>
                                                Tempo de preparo:
                                            </Heading2>
                                            <PrepareTimeInputDiv>
                                                <MdOutlineTimer
                                                    size={48}
                                                    color="#FF8787"
                                                />
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
                                                <MdOutlineDinnerDining
                                                    size={48}
                                                    color="#FF8787"
                                                />
                                                <PrepareTimeInput
                                                    type="number"
                                                    placeholder="0"
                                                    {...register("portions")}
                                                />
                                            </PortionInputDiv>
                                        </Portions>
                                    </TimeAndPortion>

                                    <SelectDiv>
                                        <SelectDefault
                                            {...register("category")}
                                        >
                                            <OptionDefault value="">
                                                Selecione uma categoria
                                            </OptionDefault>
                                            <OptionDefault value="Bolos">
                                                Bolos
                                            </OptionDefault>
                                            <OptionDefault value="Carnes">
                                                Carnes
                                            </OptionDefault>
                                            <OptionDefault value="Aves">
                                                Aves
                                            </OptionDefault>
                                            <OptionDefault value="Peixes">
                                                Peixes
                                            </OptionDefault>
                                            <OptionDefault value="Sobremesas">
                                                Sobremesas
                                            </OptionDefault>
                                            <OptionDefault value="Massas">
                                                Massas
                                            </OptionDefault>
                                            <OptionDefault value="Saladas">
                                                Saladas
                                            </OptionDefault>
                                            <OptionDefault value="Lanches">
                                                Lanches
                                            </OptionDefault>
                                            <OptionDefault value="Sopas">
                                                Sopas
                                            </OptionDefault>
                                            <OptionDefault value="Bebidas">
                                                Bebidas
                                            </OptionDefault>
                                        </SelectDefault>
                                    </SelectDiv>

                                    <IngredientDiv>
                                        <Heading3>
                                            <MdOutlineKitchen /> Ingredientes
                                        </Heading3>

                                        {inputIngredient.map((el, index) => (
                                            <IngredientInputFieldset
                                                key={el.id}
                                            >
                                                <InputSmall
                                                    type="text"
                                                    placeholder="1 1/2"
                                                    {...register(
                                                        `ingredients.${index}.amount` as const
                                                    )}
                                                />
                                                <InputDefault
                                                    type="text"
                                                    placeholder="xícara (chá) de ..."
                                                    {...register(
                                                        `ingredients.${index}.name` as const
                                                    )}
                                                />
                                                {index > 0 && (
                                                    <button
                                                        onClick={() =>
                                                            removeInputIngredient(
                                                                index
                                                            )
                                                        }
                                                    >
                                                        <TiDelete size={24} />
                                                    </button>
                                                )}
                                            </IngredientInputFieldset>
                                        ))}

                                        <ButtonDefault
                                            type="button"
                                            onClick={() =>
                                                appendInputIngredient({
                                                    amount: "",
                                                    name: "",
                                                })
                                            }
                                        >
                                            <Heading3Span>
                                                + adicionar mais ingredientes
                                            </Heading3Span>
                                        </ButtonDefault>
                                    </IngredientDiv>

                                    <StepsDiv>
                                        <Heading3>
                                            <GiCookingPot /> Modo de preparo
                                        </Heading3>

                                        {inputSteps.map((el, index) => (
                                            <div key={el.id}>
                                                <InputDefault
                                                    placeholder="Ex: Primeiro bata os ovos com a farinha..."
                                                    {...register(
                                                        `preparations.${index}.description` as const
                                                    )}
                                                />
                                                {index > 0 && (
                                                    <button
                                                        onClick={() =>
                                                            removeInputSteps(
                                                                index
                                                            )
                                                        }
                                                    >
                                                        <TiDelete size={24} />
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                        <ButtonDefault
                                            type="button"
                                            onClick={() =>
                                                appendInputSteps({
                                                    description: "",
                                                })
                                            }
                                        >
                                            <Heading3Span>
                                                + adicionar proximo passo
                                            </Heading3Span>
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
                </motion.div>
            )}
        </>
    );
};

export default RecipesSingUp;
