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
import { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ListItem from "./ListItem";
import { ProfileContext } from "../../contexts/ProfileContext";
import { useUserContext } from "../../contexts/AuthContext";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

interface iFormValues {
    name?: string;
    img?: string;
    password?: string;
}

const Profile = () => {
    const { onSubmit, pageUser, recipeList } = useContext(ProfileContext);
    const { user } = useUserContext();

    const formSchema = yup.object().shape({
        name: yup.string(),
        img: yup.string(),
        password: yup.string(),
    });

    const { register, handleSubmit } = useForm<iFormValues>({
        resolver: yupResolver(formSchema),
    });

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
                                                src={pageUser?.img}
                                                alt=""
                                            />
                                        </UserFigure>
                                        <Heading3>
                                            {pageUser?.name
                                                ? pageUser?.name
                                                : "Nome"}
                                        </Heading3>
                                    </UserInfo>

                                    <Form onSubmit={handleSubmit(onSubmit)}>
                                        <Heading3>Atualizar perfil</Heading3>
                                        <InputDefault
                                            type="text"
                                            placeholder="nome de usuário"
                                            {...register("name")}
                                        />
                                        <InputDefault
                                            type="text"
                                            placeholder="url da foto"
                                            {...register("img")}
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
                                        {recipeList?.length > 0 ? (
                                            recipeList.map((element) => (
                                                <Link
                                                    key={element.id}
                                                    to={`/recipesPage/${element.id}`}
                                                >
                                                    <ListItem
                                                        images={element.images}
                                                        name={element.name}
                                                    />
                                                </Link>
                                            ))
                                        ) : (
                                            <Heading1>
                                                Adicione uma Receita para que
                                                ela apareça aqui
                                            </Heading1>
                                        )}
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
