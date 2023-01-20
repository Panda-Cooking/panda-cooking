import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { Container, Main } from "./styles";
import { BiSend } from "react-icons/bi";

import { useAuthContext } from "../../contexts/AuthContext";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import { Heading2, Heading3, Text2 } from "../../styles/typography";
import { motion } from "framer-motion";
import { iRecipe } from "../../contexts/RecipesContext";
import api from "../../services/api";
import Loading from "../../components/Loading";
import avatar from "../../assets/img/avatar.png";
import "swiper/css";
import "swiper/css/pagination";

interface iRecipeById extends iRecipe {
    comments: {
        id: string;
        description: string;
        createdAt: string;
        updatedAt: string;
    }[];
}

interface iComment {
    description: string;
}

const RecipesPage = () => {
    const { user } = useAuthContext();
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState<iRecipeById>();

    const months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iComment>();

    const submit = async (data: iComment) => {
        const token = localStorage.getItem("@pandaToken");

        try {
            const { data: response } = await api.post(
                "/comments",
                { ...data, userId: user?.id, recipeId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setRecipe((prevState) => {
                return {
                    ...prevState!,
                    comments: [
                        ...prevState?.comments!,
                        {
                            id: response.id,
                            description: data.description,
                            createdAt: response.createdAt,
                            updatedAt: response.updatedAt,
                        },
                    ],
                };
            });

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get<iRecipeById>(
                    `/recipes/${recipeId}`
                );

                setRecipe(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const imageOnError = (
        e: React.BaseSyntheticEvent<Event, HTMLImageElement, HTMLImageElement>
    ) => {
        e.target.src = avatar;
    };

    return (
        <motion.div
            animate={{ opacity: [0, 1] }}
            exit={{ opacity: [1, 0] }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <Container>
                <Main disabled={user ? false : true}>
                    <section className="firstRecipeSection">
                        {recipe ? (
                            <div>
                                <Swiper
                                    pagination={{
                                        clickable: true,
                                    }}
                                    mousewheel={true}
                                    grabCursor={true}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    modules={[Mousewheel, Pagination]}
                                >
                                    {recipe?.imagesRecipes?.map(
                                        (image, index) => (
                                            <SwiperSlide key={index}>
                                                <img
                                                    src={image.url}
                                                    alt={recipe?.name}
                                                />
                                            </SwiperSlide>
                                        )
                                    )}
                                </Swiper>
                            </div>
                        ) : (
                            <Loading />
                        )}
                        <div className="recipeOwner">
                            <Heading2>{recipe?.name}</Heading2>
                            <div>
                                <div>
                                    <Heading3>Autor:</Heading3>
                                    <img
                                        src={recipe?.user.imageProfile}
                                        alt="user__image"
                                        onError={imageOnError}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="recipeText">
                            <p>{recipe?.description}</p>
                        </div>
                    </section>
                    <section className="secondRecipeSection">
                        <div>
                            <Heading2>Ingredientes</Heading2>
                            <ul>
                                {recipe?.ingredientsRecipes.map(
                                    ({ amount, ingredients, id }) => (
                                        <li key={id}>{`${
                                            amount + " " + ingredients.name
                                        }`}</li>
                                    )
                                )}
                            </ul>
                        </div>
                        <div>
                            <h2>Modo de preparo</h2>
                            <ol>
                                {recipe?.preparations.map(
                                    (preparation, index) => (
                                        <li key={index}>
                                            {preparation.description}
                                        </li>
                                    )
                                )}
                            </ol>
                        </div>
                    </section>
                    <section className="thirdRecipeSection">
                        <h2>Comentarios</h2>
                        <div className="comentsContainer">
                            <div className="coment">
                                <ul>
                                    {recipe?.comments?.map(
                                        ({ id, description, updatedAt }) => (
                                            <li key={id}>
                                                <div>
                                                    {false ? (
                                                        <img
                                                            src={""}
                                                            alt="user__image"
                                                        />
                                                    ) : (
                                                        <BsPerson size={25} />
                                                    )}
                                                    <Text2>{description}</Text2>
                                                </div>
                                                <Text2>{updatedAt}</Text2>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                        <form
                            className="addComentContainer"
                            onSubmit={handleSubmit(submit)}
                        >
                            <textarea
                                placeholder="Adcionar comentario..."
                                {...register("description")}
                                disabled={user ? false : true}
                            ></textarea>
                            <button type="submit">
                                <BiSend />
                            </button>
                        </form>
                    </section>
                </Main>
            </Container>
        </motion.div>
    );
};
export default RecipesPage;
