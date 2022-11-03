
import panda from '../../../assets/Panda-1.svg';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { SiFoodpanda } from 'react-icons/si';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginStyle } from './styles';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import { useUserContext } from '../../../contexts/AuthContext';
import { Heading1, Heading2 } from '../../../styles/typography';


export interface iUserLogin {
  email: string;
  password: string;
}

const SignIn = () => {
  const { loginFunction } = useUserContext();

  const formSchema = Yup.object().shape({
    email: Yup.string().required("email obrigatório"),
    password: Yup.string().min(6).required("senha obrigatória"),
  });

  const { register, handleSubmit } = useForm<iUserLogin>({
    resolver: yupResolver(formSchema),
  });

  return (
    <LoginStyle>
      <figure className="pandaStyle">
        <img src={panda} alt="panda-cooking" />
      </figure>
      <div className="divLogin">
        <div className="logoHeader">
          <SiFoodpanda />
          <Heading1>Panda Cooking</Heading1>
          <Heading2>Login</Heading2>
        </div>
        <form action="" onSubmit={handleSubmit(loginFunction)}>
          <input type="text" placeholder="E-mail" {...register("email")} />
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <span>
            Ainda não possuí uma conta?
            <Link to="/singUp">Registre-se aqui</Link>
          </span>
          <button>Entrar</button>
        </form>
      </div>
    </LoginStyle>
  );
};
export default SignIn;
