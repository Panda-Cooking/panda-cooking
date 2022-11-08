import React, { useContext, useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { Container, Main } from "./styles";
import { BiSend } from "react-icons/bi";

import api from "../../../services/api";

import { iRecipe, iRecipeComment } from "../../../contexts/RecipesContext";
import { userContext } from "../../../contexts/AuthContext";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import { Heading2, Heading3, Text2 } from "../../../styles/typography";
import { motion } from "framer-motion";
import Loading from "../../Loading";
import "swiper/css";
import "swiper/css/pagination";

const RecipesPage = () => {
  const { user } = useContext(userContext);
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState<iRecipe | null>(null);

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
  } = useForm<iRecipeComment>();

  const submit = async (data: iRecipeComment) => {
    if (user) {
      const date = new Date();
      const newComent = {
        comments: [
          ...recipe!.comments,
          {
            ...data,
            user: user,
            date: `${date.getMonth() + 1} ${date.getFullYear()}`,
          },
        ],
      };

      await api.patch(`/recipes/${recipeId}`, newComent, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@pandaToken")}`,
        },
      });

      const newRecipe = { ...recipe!, comments: newComent.comments };

      setRecipe(newRecipe);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<iRecipe[]>(`/recipes?id=${recipeId}`);

        setRecipe(data[0]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
                  {recipe?.images?.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img src={image.value} alt={recipe?.name} />
                    </SwiperSlide>
                  ))}
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
                  <img src={recipe?.author.img} alt="user__image" />
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
                {recipe?.ingredients.map((ingredient, index) => (
                  <li key={index}>{`${
                    ingredient.qtd + " " + ingredient.name
                  }`}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Modo de preparo</h2>
              <ol>
                {recipe?.preparations.map((preparation, index) => (
                  <li key={index}>{preparation.description}</li>
                ))}
              </ol>
            </div>
          </section>
          <section className="thirdRecipeSection">
            <h2>Comentarios</h2>
            <div className="comentsContainer">
              <div className="coment">
                <ul>
                  {recipe?.comments?.map((comment, index) => (
                    <li key={index}>
                      <div>
                        {comment.user.img ? (
                          <img src={comment.user.img} alt="user__image" />
                        ) : (
                          <BsPerson size={25} />
                        )}
                        <Text2>{comment.description}</Text2>
                      </div>
                      <Text2>
                        {`${months[Number(comment.date.split(" ")[0]) - 1]} ${
                          comment.date.split(" ")[1]
                        }`}
                      </Text2>
                    </li>
                  ))}
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
