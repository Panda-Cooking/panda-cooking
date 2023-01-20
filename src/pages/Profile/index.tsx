import {
    ButtonDefault,
    Container,
    Form,
    InputDefault,
    Main,
    ProfileContainer,
    RecipeList,
    RecipesContainer,
    RecipesHeader,
    UpdateProfile,
    UserFigure,
    UserImg,
    UserInfo,
} from "./style";
import {
    Heading1,
    Heading2,
    Heading3,
    Text2Span,
} from "../../styles/typography";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CardRecipe from "./CardRecipe";
import { useAuthContext } from "../../contexts/AuthContext";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import avatar from "../../assets/img/avatar.png";
import api from "../../services/api";

interface iUserUpdate {
    name?: string;
    imageProfile?: string;
    password?: string;
}

const Profile = () => {
    const { user, setUser } = useAuthContext();

    const formSchema = yup.object().shape({
        name: yup.string(),
        imageProfile: yup.string(),
        password: yup.string(),
    });

    const { register, handleSubmit } = useForm<iUserUpdate>({
        resolver: yupResolver(formSchema),
    });

    const imageOnError = (
        e: React.BaseSyntheticEvent<Event, HTMLImageElement, HTMLImageElement>
    ) => {
        e.target.src = avatar;
    };

    const submit = async (data: iUserUpdate) => {
        const token = localStorage.getItem("@pandaToken");

        try {
            const { data: response } = await api.patch("/users/profile", data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setUser(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {user ? (
                <motion.div
                    animate={{ opacity: [0, 1] }}
                    exit={{ opacity: [1, 0] }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <Container>
                        <Main>
                            <ProfileContainer>
                                <UpdateProfile>
                                    <UserInfo>
                                        <UserFigure>
                                            <UserImg
                                                src={user?.imageProfile}
                                                alt=""
                                                onError={imageOnError}
                                            />
                                        </UserFigure>
                                        <Heading3>{user?.name}</Heading3>
                                    </UserInfo>

                                    <Form onSubmit={handleSubmit(submit)}>
                                        <Heading3>Atualizar perfil</Heading3>
                                        <InputDefault
                                            type="text"
                                            placeholder="nome de usuário"
                                            {...register("name")}
                                        />
                                        <InputDefault
                                            type="text"
                                            placeholder="url da foto"
                                            {...register("imageProfile")}
                                        />
                                        <InputDefault
                                            type="text"
                                            placeholder="nova senha"
                                            {...register("password")}
                                        />
                                        <ButtonDefault>
                                            <Text2Span>
                                                Confirmar atualização
                                            </Text2Span>
                                        </ButtonDefault>
                                    </Form>
                                </UpdateProfile>

                                <RecipesContainer>
                                    <RecipesHeader>
                                        <Heading2>Minhas Receitas</Heading2>
                                    </RecipesHeader>
                                    <RecipeList>
                                        {/* {
                                        []?.length > 0 ? (
                                            [].map((element) => (
                                                <Link
                                                    key={element.id}
                                                    to={`/recipesPage/${element.id}`}
                                                >
                                                    <CardRecipe
                                                        images={
                                                            element.imagesRecipes
                                                        }
                                                        name={element.name}
                                                    />
                                                </Link>
                                            ))
                                        ) : (
                                            <Heading1>
                                                Adicione uma Receita para que
                                                ela apareça aqui
                                            </Heading1>
                                        )} */}
                                    </RecipeList>
                                </RecipesContainer>
                            </ProfileContainer>
                        </Main>
                    </Container>
                </motion.div>
            ) : (
                <Navigate to="/" />
            )}
        </>
    );
};

export default Profile;
