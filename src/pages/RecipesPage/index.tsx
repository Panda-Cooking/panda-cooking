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
import { RiEdit2Fill, RiDeleteBin6Fill } from "react-icons/ri";
import "swiper/css";
import "swiper/css/pagination";
import { useCommentContext } from "../../contexts/CommentContext";

interface iRecipeById extends iRecipe {
    comments: {
        id: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        user: {
            id: string;
            name: string;
            email: string;
            imageProfile: string;
        };
    }[];
}

interface iComment {
    description: string;
}

const RecipesPage = () => {
    const { user } = useAuthContext();
    const { setCommentId, deleteComment } = useCommentContext();
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState<iRecipeById>();

    function convertMS(ms: number | string) {
        ms = Date.now() - new Date(ms).getTime();

        let months, weeks, days, hours, minutes, seconds;
        seconds = Math.floor(ms / 1000);
        minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
        hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
        days = Math.floor(hours / 24);
        hours = hours % 24;
        weeks = Math.floor(days / 7);
        days = days % 7;
        months = Math.floor(days / 30);

        if (months) return ` há ${months} meses`;
        if (weeks) return ` há ${weeks} semanas`;
        if (days) return ` há ${days} dias`;
        if (hours) return ` há ${hours} horas`;
        if (minutes) return ` há ${minutes} minutos`;
        if (seconds) return ` há ${seconds} segundos`;

        return "agora mesmo";
    }

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

            setRecipe((prevState: any) => {
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
                                        src={recipe?.user?.imageProfile}
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
                                {recipe?.ingredientsRecipes?.map(
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
                                {recipe?.preparations?.map(
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
                                    {recipe?.comments?.map((elem) => {
                                        return (
                                            <li key={elem.id}>
                                                <div>
                                                    <div className="userComment">
                                                        {true ? (
                                                            <img
                                                                src={
                                                                    elem?.user
                                                                        ?.imageProfile
                                                                }
                                                                alt={
                                                                    "user__image"
                                                                }
                                                            />
                                                        ) : (
                                                            <BsPerson
                                                                size={25}
                                                            />
                                                        )}
                                                        <span>
                                                            {elem?.user?.name}
                                                        </span>
                                                    </div>
                                                    <p className="description">
                                                        {elem?.description}
                                                    </p>
                                                </div>
                                                <div className="btnComment">
                                                    {elem.user.id ===
                                                    user?.id ? (
                                                        <div>
                                                            <RiEdit2Fill
                                                                cursor={
                                                                    "pointer"
                                                                }
                                                                fontSize={25}
                                                            />

                                                            <RiDeleteBin6Fill
                                                                cursor={
                                                                    "pointer"
                                                                }
                                                                onClick={() => {
                                                                    deleteComment(
                                                                        elem.id
                                                                    );
                                                                }}
                                                                fontSize={23}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    <Text2>
                                                        {convertMS(
                                                            elem?.updatedAt
                                                        )}
                                                    </Text2>
                                                </div>
                                            </li>
                                        );
                                    })}
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
