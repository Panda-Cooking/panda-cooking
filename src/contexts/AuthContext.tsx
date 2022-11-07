import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { iUserLogin } from "../components/Pages/SignIn";
import { IUserRegister } from "../components/Pages/SignUp";

export interface iUserProviderProps {
  children: ReactNode;
}

export interface iUserInfo {
  email: string;
  name: string;
  img: string;
  id: number;
}

interface iUserContext {
  loginFunction(formLogin: iUserLogin): Promise<void>;
  logoutFunction(): void;
  signUpFunction(data: IUserRegister): Promise<void>;
  user: iUserInfo | null;
}

export const userContext = createContext<iUserContext>({} as iUserContext);

const AuthContext = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUserInfo | null>(null);

  const navigate = useNavigate();

  const loginFunction = async (formLogin: iUserLogin) => {
    try {
      const { data } = await api.post("/login", formLogin);
      localStorage.setItem("@pandaToken", data.accessToken);
      setUser(data.user);
      navigate("/dashboard", { replace: true });
      toast.success("Bem vindo ^^");
    } catch (error) {
      toast.error("email ou senha inválido");
    }
  };

  const signUpFunction = async (data: IUserRegister) => {
    try {
      await api.post("/register", data);
      toast.success("conta criada com sucesso!");
      navigate("/", { replace: true });
    } catch (error) {
      toast.error("conta já existente!");
    }
  };

  const logoutFunction = () => {
    setUser(null);
    localStorage.clear();
    navigate("/");
  };

  return (
    <userContext.Provider
      value={{
        loginFunction,
        logoutFunction,
        user,
        signUpFunction,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export function useUserContext(): iUserContext {
  const context = useContext(userContext);

  return context;
}

export default AuthContext;
