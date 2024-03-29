import { SiFoodpanda } from "react-icons/si";
import { BsUpload } from "react-icons/bs";
import { Text2 } from "../../styles/typography";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { useRecipeContext } from "../../contexts/RecipesContext";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import { motion } from "framer-motion";
import RecipesList from "./RecipesList";
import panda from "../../assets/img/Panda4.png";

const Dashboard = () => {
    const { categories } = useRecipeContext();

    return (
        <motion.div
            animate={{ opacity: [0, 1] }}
            exit={{ opacity: [1, 0] }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <Container>
                <main>
                    <section className="filterSection">
                        <div id="fs1">
                            <Link to="/">
                                <SiFoodpanda
                                    size={30}
                                    id="miniLogo"
                                ></SiFoodpanda>
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
                                        className={index < 1 ? "filterAll" : ""}
                                        key={category.id}
                                    >
                                        {category.name}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </section>
                    <RecipesList></RecipesList>
                </main>
            </Container>
        </motion.div>
    );
};

export default Dashboard;
