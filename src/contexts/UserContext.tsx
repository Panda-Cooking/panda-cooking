import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { IUserRegister } from "../components/Pages/SignUp";
import api from "../services/api";

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserContext {
  signUpFunction(data: IUserRegister): void;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();

  function signUpFunction(data: IUserRegister): void {
    api.post("/register", data);

    navigate("/", { replace: true });
  }

  return (
    <UserContext.Provider value={{ signUpFunction }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
