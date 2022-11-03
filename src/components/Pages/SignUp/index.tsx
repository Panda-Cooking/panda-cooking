import React from "react";
import { SiFoodpanda } from "react-icons/si";
import { Heading1, Heading3 } from "../../../styles/typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  Error,
  Main,
  StyledBtn,
  StyledForm,
  StyledImg,
  StyledInput,
  StyledP,
} from "./styles";
import pandaImg from "../../../assets/img/panda-Register.png";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../contexts/AuthContext";

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  img: string;
}

const SignUp = () => {
  const StyledIcon = { fontSize: "5em", paddingTop: "2rem" };
  const { signUpFunction } = useUserContext();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Deve conter 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um símbolo."
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Deve ser idêntica a senha original"),
    img: yup.string().required("Imagem obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(formSchema),
  });

  return (
    <Main>
      <Container>
        <StyledImg src={pandaImg} alt="Imagem de Registro"></StyledImg>
        <StyledForm onSubmit={handleSubmit(signUpFunction)}>
          <SiFoodpanda style={StyledIcon} />
          <Heading1>Panda Cooking</Heading1>
          <Heading3>Registre-se</Heading3>
          <StyledInput placeholder="Nome" type="text" {...register("name")} />
          <Error>{errors.name?.message}</Error>
          <StyledInput
            placeholder="E-Mail"
            type="email"
            {...register("email")}
          />
          <Error>{errors.email?.message}</Error>
          <StyledInput
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          <Error>{errors.password?.message}</Error>
          <StyledInput placeholder="Confirme sua senha" type="password" />
          <Error>{errors.confirmPassword?.message}</Error>
          <StyledInput
            placeholder="Imagem de perfil"
            type="text"
            {...register("img")}
          />
          <Error>{errors.img?.message}</Error>
          <Link to="/signIn" relative="path">
            <StyledP>Já possuí uma conta? Faça login aqui!</StyledP>
          </Link>
          <StyledBtn type="submit">Registrar</StyledBtn>
        </StyledForm>
      </Container>
    </Main>
  );
};

export default SignUp;